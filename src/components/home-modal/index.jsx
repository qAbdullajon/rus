import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const onSubmit = async (value) => {
    console.log(value);
    fetch("https://script.google.com/macros/s/AKfycbxyt0hoRIvrcpcH10L9idl3Ylr8KyyknngQIHu8QAB5wgYmE6efcOg6AKIGps8acNAW/exec", {
      method: "POST",
      body: { ...value, Data: "12.03.2024" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.msg);
      })
      .catch((err) => {
        console.error("There was a problem with the fetch operation:", err);
        alert("Submission failed. Please try again.");
      });
  };
  return (
    <>
      <Modal open={open} footer={null} onCancel={onCancel}>
        <p className="text-center text-xl font-semibold pb-3">
          Ro'yxatdan o'tish uchun <br /> ma'lumotlaringizni kiriting!
        </p>
        <Form onFinish={onSubmit} form={form} layout="vertical">
          <Form.Item name="Name" label="Ismingiz" rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}>
            <Input className="py-3" size="large" placeholder="Name" />
          </Form.Item>
          <Form.Item name="Phone" label="Telefon raqamingiz" rules={[{ required: true, message: "Iltimos, telifon reqamingizni kiriting!" }]}>
            <Input className="py-3" size="large" placeholder="Phone number" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="submit-btn w-full uppercase mt-5 font-bold" size="large">
              Davom etish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default HomeModal;

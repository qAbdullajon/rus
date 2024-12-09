import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const onSubmit = async (value) => {
    try {
      fetch("https://script.google.com/macros/s/AKfycbzEeCfbKOZP77FkmL2evyOeili41Md1MsydzUw0zfQqpBLlCMz_ld8wyV6Pk0ybZF8w/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Serverda xatolik: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          console.log("Serverdan kelgan javob:", result);
        })
        .catch((error) => {
          console.error("Xatolik:", error.message);
        });
    } catch (err) {
      console.log(err);
    }
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

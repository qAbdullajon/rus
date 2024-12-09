import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const onSubmit = async (value) => {
    console.log(value);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbz6THTGaQkXCKvZBr2VdHi4fT3vUpOIkm1c2C0bEUkr6mOM83NlcbiGrlRF9eLkxCbn/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Yuborilayotgan ma'lumot turi JSON ekanligini bildiradi
        },
        body: JSON.stringify(value),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Serverda xatolik: ${res.status}`);
          }
          return res.json(); // Javobni JSON formatda olish
        })
        .then((result) => {
          console.log("Serverdan kelgan javob:", result); // Serverdan javob
        })
        .catch((error) => {
          console.error("Xatolik:", error.message); // Xatolikni konsolga chiqarish
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

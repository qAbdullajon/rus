import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const onSubmit = async (value) => {
    const url = "https://script.google.com/macros/s/AKfycbxx1mW73I3gvtP3--JsYJsv0zpkQQ-a4rPKZy3ggZAZu2AzbavaUVHT7LwmdPEQ_Fbe/exec"; // Joylangan Web App URL-ni kiriting

    const data = {
      Date: new Date().toISOString(), // Hozirgi sana
      Name: "John Doe", // Ismingiz
      Phone: "+1234567890", // Telefon raqam
    };

    fetch("https://script.google.com/macros/s/AKfycbz1nnWvMCDL6417SCVXA3tI0HOztNbNAKGY5WozexFUfXgvfyoERfcSgcsYl32jpXzv/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log("Data added successfully:", result.message);
        } else {
          console.error("Error adding data:", result.message);
        }
      })
      .catch((error) => {
        console.error("Request failed:", error);
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

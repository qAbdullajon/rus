import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    const { name, phone } = values;
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz4Jbe_Va4_wVS8HtsE0xZwpM8on9nDbwZsyxGPVAHT97VTw6AfRMAYpvSZfLQfC-mhOg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        alert("/obuna");
      } else {
        message.error("Ma'lumot yuborishda xato.");
      }
    } catch (error) {
      message.error("Xato: " + error.message);
    } finally {
      setLoading(false);
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
            <Input className="py-3" size="large" placeholder="name" />
          </Form.Item>
          <Form.Item name="phone" label="Telefon raqamingiz" rules={[{ required: true, message: "Iltimos, telifon reqamingizni kiriting!" }]}>
            <Input className="py-3" size="large" placeholder="Phone number" />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} htmlType="submit" className="submit-btn w-full uppercase mt-5 font-bold" size="large">
              Davom etish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default HomeModal;

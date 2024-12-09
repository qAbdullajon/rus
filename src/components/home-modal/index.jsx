import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import axios from "axios";

const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("https://api.sheetbest.com/sheets/861556af-de12-4288-a700-1cfcc8e815dc", { Name: values.name, Phone: values.phone });
      if (res.status === 200) {
        console.log(res);
      }
    } catch (error) {
      message.error("Xato: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} footer={null} onCancel={onCancel}>
      <p className="text-center text-xl font-semibold pb-3">
        Ro'yxatdan o'tish uchun <br /> ma'lumotlaringizni kiriting!
      </p>
      <Form onFinish={onSubmit} form={form} layout="vertical">
        <Form.Item name="name" label="Ismingiz" rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}>
          <Input className="py-3" size="large" placeholder="Ismingiz" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefon raqamingiz"
          rules={[
            {
              required: true,
              message: "Iltimos, telefon raqamingizni kiriting!",
            },
          ]}
        >
          <Input className="py-3" size="large" placeholder="Telefon raqami" />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} htmlType="submit" className="submit-btn w-full uppercase mt-5 font-bold" size="large">
            Davom etish
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default HomeModal;

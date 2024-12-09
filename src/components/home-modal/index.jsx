import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setLoading(true);
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, "0");
    let month = String(currentDate.getMonth() + 1).padStart(2, "0");
    let year = currentDate.getFullYear();
    let hours = String(currentDate.getHours()).padStart(2, "0");
    let minutes = String(currentDate.getMinutes()).padStart(2, "0");
    let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    const data = {
      Date: formattedDate,
      Name: values.name.trim(),
      Phone: values.phone.replace(" ", ""),
    };
    console.log(data);
    try {
      const res = await axios.post("https://api.sheetbest.com/sheets/861556af-de12-4288-a700-1cfcc8e815dc", data);
      if (res.status === 200) {
        navigate("/tolov-sahifasi");
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
      <Form autoComplete="off" onFinish={onSubmit} form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Ismingiz"
          rules={[
            { required: true, message: "Iltimos, ismingizni kiriting!" },
            { min: 4, message: "Iltimos, to'liq ismingizni yozing" },
          ]}
        >
          <Input className="py-3 home-input" size="large" placeholder="Ismingiz" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefon raqamingiz"
          rules={[
            {
              required: true,
              message: "Iltimos, telefon raqamingizni kiriting!",
            },
            {
              min: 11,
              message: "Iltimos, telifon raqamni oxirigacha yozing",
            },
          ]}
        >
          <PhoneInput
            country={"uz"}
            className="phone-input"
            inputStyle={{
              border: "0.8px solid #c9c9c9",
              outline: "none",
              width: "100%",
              height: "54px",
            }}
          />
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

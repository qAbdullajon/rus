import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const RegistrationForm = () => {
  const [fileList, setFileList] = useState([]);
  const [time, setTime] = useState(15 * 60);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFileChange = ({ fileList }) => setFileList(fileList);
  const handleSubmit = async (values) => {
    const { name, phone } = values;
    const file = fileList[0]?.originFileObj;
    setLoading(true);

    if (!file) {
      message.error("Faylni tanlang!");
      setLoading(false);
      return;
    }

    const formData = new FormData();

    try {
      // Faylni base64 formatiga aylantirish
      const base64File = await getBase64(file);
      formData.append("fileContent", base64File);
      formData.append("filename", file.name);
      formData.append("name", name);
      formData.append("phone", phone);
      const response = await fetch(`${process.env.VITE_API_URL}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/obuna");
      } else {
        message.error("Ma'lumot yuborishda xato.");
      }
    } catch (error) {
      message.error("Xato: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("5614 6819 1836 7438")
      .then(() => {
        alert("Karta raqami nusxalandi: 5614 6819 1836 7438!");
      })
      .catch((error) => {
        console.error("Nusxalashda xato yuz berdi", error);
      });
  };
  // Faylni base64 ga aylantirish
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="flex justify-center py-5 mx-2">
      <div className="max-w-[420px] w-full flex flex-col gap-5">
        <div className="border border-[#e3e3e3] rounded-[15px] p-5 bg-[#e2f0ff]">
          <p className="text-[25px] text-[#2f3463] font-bold">SUPER RUS TILI</p>
          <p className="text-[15px]">Tarif: VIP</p>
          <p className="text-[28px] text-[#2f3463] pt-3">47,000 so'm</p>
          <div className="flex justify-between items-center">
            <p className="text-[#2f3463] text-[14px]">
              To'lov qilish muddati <br /> tugashiga oz qoldi!
            </p>
            <p className="text-xl text-[red] bg-white px-6 py-2 rounded-lg">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </p>
            {time === 0 && <p>Vaqtingiz tugadi!</p>}
          </div>
        </div>
        <div className="border border-[#e3e3e3] rounded-[20px] px-4 py-5">
          <p className="text-xl">Quyidagi karta raqamiga to'lovni amalga oshiring va ism familiyangizni, telefon raqamingizni va to'lov chekini quyida qoldiring</p>
          <div className="border border-[#e5e7eb] bg-[#ececec] rounded-xl py-2 px-4 my-4 flex flex-col gap-2">
            <div className="flex justify-between text-xl font-light">
              <p>PLASTIK KARTA</p>
              <p>47,000 so'm</p>
            </div>
            <div className="h-[1px] bg-[#c6c6c6]"></div>
            <div className="flex justify-between">
              <p className="text-2xl font-light">5614 6819 1836 7438</p>
              <FontAwesomeIcon onClick={copyToClipboard} icon={faCopy} className="text-[#2F80EC] text-2xl cursor-pointer" />
            </div>
            <p className="text-lg font-light pt-3">Alijonova Dilshodaxon</p>
          </div>
          <Form
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={{
              name: "",
              phone: "",
            }}
          >
            <Form.Item name="name" rules={[{ required: true, message: "Iltimos, ism va familiyangizni kiriting!" }]}>
              <Input size="large" placeholder="Ismingiz" style={{ height: "48px" }} />
            </Form.Item>

            <Form.Item name="phone" style={{ marginBottom: "10px" }} rules={[{ required: true, message: "Iltimos, telefon raqamingizni kiriting!" }]}>
              <PhoneInput
                country={"uz"}
                inputStyle={{
                  border: "0.8px solid #000",
                  outline: "none",
                  width: "100%",
                  height: "48px",
                }}
              />
            </Form.Item>
            <p className="text-base">To'lov chekini yuklang</p>
            <Form.Item name="attach" rules={[{ required: true, message: "Iltimos, telefon raqamingizni kiriting!" }]} valuePropName="fileList" getValueFromEvent={(e) => e && e.fileList}>
              <Upload fileList={fileList} beforeUpload={() => false} onChange={handleFileChange} maxCount={1} showUploadList={{ showRemoveIcon: true }}>
                <Button icon={<UploadOutlined />}>File yuklash</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button loading={loading} size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
                DAVOM ETISH
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="border border-[#e3e3e3] rounded-[20px] px-4 py-5">
          <p className="text-center text-xl">
            Yordam kerakmi? <br />
            Admin bilan bog'laning
          </p>
          <Button className="w-full yozish bg-[#d1444e] border-none mt-4 text-white py-7" onClick={() => (window.location.href = "https://t.me/dilshoda_kurbonova")}>
            ADMINGA YOZISH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

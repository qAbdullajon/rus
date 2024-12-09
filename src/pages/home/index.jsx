import React, { useState } from "react";
import HomeModal from "../../components/home-modal";
import Dalle from "../../assets/dalle.png";
import Tugma from "../../assets/tugma.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import "./style.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col items-center w-full">
      <HomeModal open={open} onCancel={onCancel} />
      <div className="bg-home-bg bg-no-repeat bg-cover w-full h-full flex justify-center pb-14">
        <div className="flex flex-col items-center pt-7 pb-8 text-white">
          <p className="border-2 border-dashed rounded-[40px] w-fit px-12 py-3 text-base min-[450px]:text-xl uppercase text-center">11-12-13-Dekabr | 20:30 UZB</p>
          <p className="text-xl pt-7 text-center px-3">Dilshoda Kurbonovadan 3 kunlik onlayn marafon</p>
          <p className="text-center font-bold pb-8 min-[1100px]:w-[80%] px-6 text-[32px] leading-[38px] pt-3 capitalize">Qanday qilib 3 kunda so'z boyligingizni oshirib, rus tilida qo'rqmasdan gapirish mumkin?</p>
          <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/YiccF7TbeMA?si=DkwQPgCM8ZMPOKDB" title="YouTube video player" frameBorder="0" /* To‘g‘ri yozilishi */ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="circle-sides bg-[#d84f4466] p-[1px] mt-14 w-[90%] min-[750px]:w-[90%] max-w-[1033px]">
            <div className="flex justify-between items-center px-7 gap-4 flex-col min-[900px]:flex-row min-[1100px]:px-14 py-6 min-[1100px]:w-[1031px] bg-[#562125] circle-sides">
              <div className="flex flex-col gap-[10px] min-[900px]:order-1 order-2">
                <div className="flex items-center gap-4">
                  <div className="w-[25px] h-[25px] bg-[#d25c57] flex justify-center items-center rounded-full">
                    <div className="w-[13px] h-[13px] bg-[#9d170d] rounded-full"></div>
                  </div>
                  <p className="leading-[23px] text-base min-[900px]:text-[15px] min-[900px]:max-w-[350px] w-[100%]">Qanday qilib 25 daqiqada 65 ta so‘zni bir martada eslab qolishni</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[25px] h-[25px] bg-[#d25c57] flex justify-center items-center rounded-full">
                    <div className="w-[13px] h-[13px] bg-[#9d170d] rounded-full"></div>
                  </div>
                  <p className="leading-[23px] text-base min-[900px]:text-[15px] min-[900px]:max-w-[350px] w-[100%]">Yodlagan so‘zlaringizni razgovorda ishlatishni 7 ta sirli usulini ko‘rib chiqamiz</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[25px] h-[25px] bg-[#d25c57] flex justify-center items-center rounded-full">
                    <div className="w-[13px] h-[13px] bg-[#9d170d] rounded-full"></div>
                  </div>
                  <p className="leading-[23px] text-base min-[900px]:text-[15px] min-[900px]:max-w-[350px] w-[100%]">Rus tilida ekin va ravon so'zlashishning 9 ta usulini bilib olasiz</p>
                </div>
              </div>
              <div className="flex flex-col min-[750px]:flex-row min-[900px]:flex-col items-center min-[900px]:order-2 order-1 gap-3 min-[750px]:gap-6">
                <img src={Tugma} onClick={() => setOpen(true)} className="cursor-pointer w-[260px] min-[900px]:w-[370px]" alt="" />
                <p className="capitalize leading-[24px] text-base flex gap-1 min-[450px]:text-xl font-semibold">
                  <del>497,000 so'm</del>
                  <span>atigi</span>
                  <span className="text-[#00CD50]">47,000 so'm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-[22px] w-full h-[80px] overflow-hidden flex justify-center">
        <div className="w-[20200px] h-[20200px] bg-white rounded-full absolute"></div>
      </div>
      <div className="flex flex-col items-center max-w-[820px] pb-12">
        <img width={142} src={Dalle} alt="" />
        <p className="leading-[54px] text-center font-bold text-[35px] pt-8 translate-[1px]">Bonus sovg’alarni qo’lga kiritasiz</p>
        <div className="pt-12 flex flex-col gap-10 px-4">
          <div className="bg-[#130d0d] rounded-xl p-3">
            <div className="text-white flex gap-6 py-4 relative items-center border border-white rounded-[10px] px-10 min-[824px]:py-1">
              <p className="text-[93px] hidden min-[824px]:block leading-[144px] font-bold">01</p>
              <p className="leading-[37px] text-[18px] min-[440px]:text-xl min-[500px]:text-2xl font-semibold">Razgovorda eng ko'p ishlatiladigan 1000 dan ortiq gaplar ro'yxati</p>
              <img className="rotate-12 w-[60px] absolute min min-[500px]:static -top-10 right-0 min-[824px]:w-[100px]" src={Img1} alt="" />
            </div>
          </div>
          <div className="bg-[#130d0d] rounded-xl p-3">
            <div className="text-white flex gap-6 py-4 relative items-center border border-white rounded-[10px] px-10 min-[824px]:py-1">
              <p className="text-[93px] hidden min-[824px]:block leading-[144px] font-bold">02</p>
              <p className="leading-[37px] text-[18px] min-[440px]:text-xl min-[500px]:text-2xl font-semibold">Rus tilini 90% tushunishingiz uchun 3000 dan ortiq tayyor so'zlar ro'yxati</p>
              <img className="rotate-12 w-[60px] absolute min min-[500px]:static -top-10 right-0 min-[824px]:w-[100px]" src={Img2} alt="" />
            </div>
          </div>
          <div className="bg-[#130d0d] rounded-xl p-3">
            <div className="text-white flex gap-6 py-4 relative items-center border border-white rounded-[10px] px-10 min-[824px]:py-1">
              <p className="text-[93px] hidden min-[824px]:block leading-[144px] font-bold">03</p>
              <p className="leading-[37px] text-[18px] min-[440px]:text-xl min-[500px]:text-2xl font-semibold">Yopiq darsda qatnashganingiz haqidagi maxsus sertifikat</p>
              <img className="rotate-6 w-[60px] absolute min min-[500px]:static -top-8 right-0 min-[824px]:w-[100px]" src={Img3} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-12">
          <img src={Tugma} onClick={() => setOpen(true)} className="cursor-pointer w-full px-3 max-w-[400px]" alt="" />
          <p className="capitalize text-lg min-[500px]:text-2xl font-bold flex gap-2 pt-5">
            <del>497,000 so'm</del>
            <span>atigi</span>
            <span className="text-[#00CD50]">47,000 so'm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Vektor from "../../assets/vektor.png"; // Make sure the path to your image is correct

const Offer = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-col items-center w-full max-w-[400px] mx-3">
        <div className="w-[84px] h-[84px] bg-[rgba(60,104,244,0.6)] flex justify-center items-center rounded-[20px]">
          <p className="text-[50px] font-bold text-white w-[70px] h-[70px] bg-[#3c68f4] flex justify-center items-center rounded-[20px]">!</p>
        </div>
        <div>
          <h3 className="text-[28px] py-5 min-[420px]:text-[35px] font-bold text-center">
            TO'XTANG! <br />
            YANA BIR QADAM...
          </h3>
          <p className="text-[19px] text-center">
            Quyidagi ko'k tugmani bosib yopiq <br /> kanalga qo'shiling
          </p>
        </div>
        {/* Corrected img tag */}
        <img className="py-5" width={23} src={Vektor} alt="Vektor Image" />
        <button onClick={() => (window.location.href = "https://t.me/+0X8yqblhQUdjNzM6")} className="uppercase bg-gradient-to-t from-[#3b67f4] via-[#6287ff] to-[#3b67f4] rounded-[18px] text-base text-white py-7 px-[80px] leading-normal font-medium">
          Kanalga obuna bo'ling
        </button>
      </div>
    </div>
  );
};

export default Offer;

"use client";

import Image from "next/image";
import portfolio from "../_assets/portfolio.png";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import AnimateSection from "./AnimateSection";

const Hero = () => {
  return (
    <AnimateSection>
    <section className="pt-[100px] px-[15px] md:pt-[150px]">
      <div className="md:flex md:items-center md:justify-between md:max-w-[1100px] md:mx-auto">
        <div className="">
        <p className="text-[#2EA8A2] bg-[#2ea8a217] inline-block text-[10px] rounded px-[10px] py-[2px]">
          Best Stock exchange platform
        </p>

        <p className="mt-[00px] text-[25px] md:text-[45px]">
          Embrace the future of{" "}
          <span className="text-[#2EA8A2]">
            STOCK
            <Typewriter
              words={[" INVESTMENT", " EXCHANGE", " ANALYSIS", " TRADING"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>{" "}
          of our time
        </p>

        <p className="mt-[10px] text-[14px] md:text-[16px] text-[#7b7b7b] mb-[10px]">
          {" "}
          Our platform provides real-time stock data, prices, and trading tools,
          helping both novice and experienced investors make informed decisions
          and manage portfolios effectively.
        </p>

        <div className="flex items-center gap-[20px]">
          <button className="text-[14px] text-[#fff] bg-[#2EA8A2] hover:bg-[#fff] hover:text-[#2EA8A2] px-[10px] py-[5px] rounded-[5px]  border-[#2EA8A2] border">
            Trade Now
          </button>

          <button className="text-[14px] flex items-center bg-[#fff] text-[#2EA8A2] hover:text-[#fff] hover:bg-[#2EA8A2] px-[10px] py-[5px] rounded-[5px] border-[#2EA8A2] border">
            Watch Demo <AiOutlinePlayCircle className="mt-[3px]"/>
          </button>
        </div>

        <div className="mt-[15px]">
          <p className="flex text-[#2EA8A2] text-[12px] flex items-center gap-[10px] mb-[3px]">
            <FaCircleCheck /> Secure and encrypted transactions
          </p>
          <p className="flex text-[#2EA8A2] text-[12px] flex items-center gap-[10px]">
            <FaCircleCheck /> Secure and encrypted transactions
          </p>
        </div>
        </div>

        <Image
          src={portfolio}
          alt="portfolio"
          width={500}
          height={500}
          quality={100}
          className="w-[100%] md:w-[50%] md:h-[500px] h-content rounded-[10px]"
        />
      </div>
    </section>
    </AnimateSection>
  );
};

export default Hero;

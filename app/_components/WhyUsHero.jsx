"use client";

import Image from "next/image";
import why from "../_assets/why.png";
import AnimateSection from "./AnimateSection";

const WhyHero = () => {
  return (
    <AnimateSection>
      <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
       <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between md:max-w-[1100px] md:mx-auto"> <Image
          src={why}
          alt="why"
          width={500}
          height={500}
          quality={100}
          className="w-[100%] md:w-[60%] md:h-[600px] h-content rounded-[10px]"
        />
        <div className="">
          <p className="font-semibold text-[20px] mb-[20px] md:text-[40px]">Why Choose STEX?</p>
          <p className=" mb-[10px] text-[14px] text-gray-700 md:text-[14px]">
          At STEX, we stand out by offering more than just a trading platform—we provide a comprehensive investment experience tailored to your needs. With real-time market data, advanced trading tools, and a user-friendly interface, we empower you to make smart investment decisions with confidence.
          </p>{" "}
          <p className=" mb-[10px] text-[14px] text-gray-700 md:text-[14px]">
          Whether you&apos;re a novice or a seasoned trader, STEX is your reliable partner in navigating the dynamic world of finance. Choose STEX for a platform that puts you in control, supports your growth, and prioritizes your success.
          </p>
        </div></div>
      </section>
    </AnimateSection>
  );
};

export default WhyHero;

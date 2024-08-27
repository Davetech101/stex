"use client";

import Image from "next/image";
import about from "../_assets/about.png";
import AnimateSection from "./AnimateSection";

const AboutHero = () => {
  return (
    <AnimateSection>
      <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between md:max-w-[1100px] md:mx-auto">
          {" "}
          <Image
            src={about}
            alt="about"
            width={500}
            height={500}
            quality={100}
            className="w-[100%] md:w-[60%] md:h-[600px] h-content rounded-[10px]"
          />
          <div className="">
            <p className="font-semibold text-[20px] mb-[20px] md:text-[40px]">
              About STEX
            </p>
            <p className=" mb-[10px] text-[14px] text-gray-700 md:text-[14px]">
              At STEX, we’re redefining your stock market experience. Our
              platform offers seamless, intuitive tools for investors at all
              levels, combining advanced technology with in-depth market
              insights.
            </p>{" "}
            <p className=" mb-[10px] text-[14px] text-gray-700 md:text-[14px]">
              We empower you to make informed decisions with real-time data,
              sophisticated trading tools, and educational resources. Whether
              you’re tracking trends, analyzing stocks, or trading, STEX is your
              trusted partner. Join us to take your investment journey to the
              next level, where innovation meets opportunity and financial
              success is within reach.
            </p>
          </div>
        </div>
      </section>
    </AnimateSection>
  );
};

export default AboutHero;

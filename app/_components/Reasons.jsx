"use client";

import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";
import AnimateSection from "./AnimateSection";

const reasons = [
  {
    head: "New Market Opportunities",
    text: "Access a diverse range of global markets and investment options to expand your portfolio and maximize returns.",
    icon: <SiCoinmarketcap />,
  },
  {
    head: "Security",
    text: "Experience safe and secure trading with our advanced encryption and robust security protocols protecting your investments.",
    icon: <MdOutlineSecurity />,
  },
  {
    head: "Minimal Capital Requirement",
    text: "Start investing with a small amount of capital and gradually build your wealth through strategic stock selections.",
    icon: <TfiMoney />,
  },
];

const Reasons = () => {
  return (
    <AnimateSection>
      <section className="p-4 mt-5 bg-[#2ea8a217]">
        <div className="max-w-[1100px] mx-auto md:py-[50px]">
          <h2 className="text-[20px] font-semibold mb-2 md:text-[26px] md:mb-[20px] md:text-center">
            Reasons to Choose Stocks from STEX
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-4 border rounded-[10px] shadow-sm hover:shadow-md transition-all h duration-300 bg-white"
              >
                <div className="bg-[#2EA8A2] text-white inline-block p-[10px] rounded">
                  {reason.icon}
                </div>
                <h3 className="text-[18px] font-bold mb-2">{reason.head}</h3>
                <p className="text-[14px] text-gray-700">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateSection>
  );
};

export default Reasons;

"use client";
import { SiAdguard } from "react-icons/si";
import AnimateSection from "./AnimateSection";

const orders = [
  {
    name: "Stop Order",
    text: "Automatically triggers a buy or sell order once the stock reaches a specified price, helping you protect gains or limit losses.",
  },
  {
    name: "Limit Order",
    text: "Sets the maximum or minimum price at which you're willing to buy or sell, ensuring that your trade is executed at a desirable price.",
  },
  {
    name: "Stop Limit Order",
    text: "Combines the features of a stop order and a limit order to give you precise control over the price at which your order is executed.",
  },
];

const AdvancedOrder = () => {
  return (
    <AnimateSection>
      <section className="p-[15px]">
        <div className="max-w-[1100px] mx-auto md:flex items-center justify-between gap-[20px]">
          <div className="">
            <p className="text-xl font-semibold mb-4 md:text-[26px]">
              Advanced Order <br /> Types for Enhancement
            </p>
            <p className="mb-[10px] text-[14px] text-gray-700 md:text-[18px]">
              Provides the ability to access a variety of order types, allowing
              you to step up and execute trades with high precision.
            </p>{" "}
            <button className="text-[14px] text-[#fff] bg-[#2EA8A2] hover:bg-[#fff] hover:text-[#2EA8A2] px-[10px] py-[5px] rounded-[5px] border-[#2EA8A2] border">
              Explore more
            </button>
          </div>

          <div className="bg-[#2ea8a217] mt-[20px] p-[20px] rounded-[10px]">
            <ul className="bg-white p-[10px] shadow rounded">
              {orders.map((order, index) => (
                <li key={index} className="mb-4 flex items-top gap-[10px]">
                  <SiAdguard className="text-[#2EA8A2] text-[50px]" />
                  <div className="">
                    <p className="font-bold text-lg">{order.name}</p>
                    <p className="text-[14px] text-gray-700">{order.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </AnimateSection>
  );
};

export default AdvancedOrder;

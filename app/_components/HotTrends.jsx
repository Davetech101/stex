"use client";
import { SiTesla } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaAmazon } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import AnimateSection from "./AnimateSection";

const stocks = [
  {
    name: "Apple Inc.",
    symbol: <FaApple />,
    price: 179.21,
    marketCap: "2.85T",
    change24h: "+1.25%",
    volume24h: "88.45M",
  },
  {
    name: "Microsoft Corporation",
    symbol: <TfiMicrosoftAlt />,
    price: 324.45,
    marketCap: "2.42T",
    change24h: "-0.58%",
    volume24h: "25.77M",
  },
  {
    name: "Amazon.com, Inc.",
    symbol: <FaAmazon />,
    price: 136.62,
    marketCap: "1.39T",
    change24h: "+2.07%",
    volume24h: "53.94M",
  },
  {
    name: "Tesla, Inc.",
    symbol: <SiTesla />,
    price: 248.5,
    marketCap: "790.85B",
    change24h: "+3.75%",
    volume24h: "130.51M",
  },
  {
    name: "Alphabet Inc. (Google)",
    symbol: <FaGoogle />,
    price: 132.29,
    marketCap: "1.67T",
    change24h: "+0.89%",
    volume24h: "24.56M",
  },
  {
    name: "Mercedes",
    symbol: <SiMercedes />,
    price: 469.67,
    marketCap: "1.17T",
    change24h: "-1.12%",
    volume24h: "46.84M",
  },
];

const valueStyles = "text-[10px] md:text-[16px]";

const HotTrends = () => {
  return (
    <AnimateSection>
    <section className="p-[15px] md:pt-[50px]">
      <div className="max-w-[1100px] mx-auto">
      <p className="mb-4 text-[16px] font-semibold md:text-[26px] md:text-center md:mb-[20px]">
        Exploring hottest Stock Trends
      </p>

      <div className="grid grid-cols-6 gap-4 items-center bg-gray-200 p-2 rounded md:px-[30px]">
        <span className={valueStyles}>Stock</span>
        <span className={valueStyles}>Price</span>
        <span className={valueStyles}>Change</span>
        <span className={valueStyles}>Volume</span>
        <span className={valueStyles}>Cap</span>
        <span className="text-[10px] text-transparent">lllll</span>
      </div>

      <ul>
        {stocks.map((stock, index) => (
          <li
            key={index}
            className="grid grid-cols-6 gap-4 items-center mb-2 p-2 border-b md:px-[30px]"
          >
            <span className="text-[20px]">{stock.symbol}</span>
            <span className={valueStyles}>${stock.price.toFixed(2)}</span>
            <span
              className={`${valueStyles} ${
                stock.change24h.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {stock.change24h}
            </span>
            <span className={valueStyles}>{stock.volume24h}</span>
            <span className={valueStyles}>{stock.marketCap}</span>
            <span className={valueStyles}>
              <button className="bg-[#2EA8A2] text-[10px] text-white px-[5px] py-1 rounded-[2px] md:px-[15px] md:py-[5px] md:text-[16px]">
                Trade
              </button>
            </span>
          </li>
        ))}
      </ul>
      </div>
    </section>
    </AnimateSection>
  );
};

export default HotTrends;

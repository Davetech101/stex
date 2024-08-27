"use client";
import { AiOutlineStock } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import AnimateSection from "./AnimateSection";

const socialIcons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
];

const navSections = [
  {
    title: "COMPANY",
    links: ["Trade", "Featured Market", "Portfolio"],
  },
  {
    title: "STOCK MARKET",
    links: ["Price Chart", "Market Analysis", "Latest News", "ICO"],
  },
  {
    title: "RESOURCES",
    links: ["Documentation", "Tutorials", "API Reference", "Community Forum"],
  },
  {
    title: "COMMUNITY",
    links: ["Blog", "Events", "Webinars", "Newsletter"],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <AnimateSection>
      <footer className="bg-[#1A1A1A] text-[#fff] py-[20px] z-0">
        <div className="max-w-[1100px] mx-auto px-[15px] flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-[15px] w-full md:justify-between">
            <div className="text-[24px] font-bold flex items-center animate-bounce">
              <AiOutlineStock className="animate-bounce" /> ST
              <span className="italic">EX</span>
            </div>
            <div className="flex space-x-[10px]">
              {socialIcons.map((icon, index) => (
                <a
                  href={icon.link}
                  key={index}
                  className="hover:text-[#2EA8A2] cursor-pointer"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-[15px] grid grid-cols-2 md:grid-cols-4 gap-[20px] mt-[20px]">
          {navSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-[#2EA8A2] mb-[10px] font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-[5px]">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:text-[#2EA8A2] cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-[1100px] mx-auto px-[15px] mt-[20px] flex flex-col md:flex-row justify-between items-center border-t border-[#333] pt-[10px]">
          <p className="text-[14px]">
            © {year} ST<span className="italic">EX</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-[15px] mt-[10px] md:mt-0">
            <a href="#" className="hover:text-[#2EA8A2]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#2EA8A2]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </AnimateSection>
  );
};

export default Footer;

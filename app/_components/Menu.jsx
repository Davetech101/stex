"use client";

import Link from "next/link";
import { AiOutlineStock } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Why STEX?",
    href: "/why-us",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Menu = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  return (
    <header className="p-[15px] flex items-center justify-between bg-gradient-to-r from-[#fff] to-[#2ea8a217] fixed top-[0] left-0 w-screen md:hidden">
      <Link
        href={"/"}
        className="text-[#2EA8A2] flex items-center text-[24px] font-bold animate-bounce"
      >
        <AiOutlineStock className="animate-bounce" />

        <p className="">
          ST<span className="italic">EX</span>
        </p>
      </Link>

      <button className="" onClick={() => setShowNav(true)}>
        <RxHamburgerMenu />
      </button>

      <div
        className={` ${
          showNav ? "visible" : "invisible"
        } fixed w-screen left-0 top-0 h-[screen]`}
      >
        <div
          className={`${
            showNav ? "translate-x-0" : "-translate-x-[100%]"
          } transition-all duration-500 h-screen w-[30%] bg-[#0000008f]`}
          onClick={() => setShowNav(false)}
        />

        <div
          className={`${
            showNav ? "translate-x-0" : "translate-x-[100%]"
          }  transition-all duration-700 h-screen fixed right-0 top-0 w-[70%] bg-[#2EA8A2] flex items-center justify-center`}
        >
          <button
            className="text-[#fff] absolute top-[10px] right-[10px] text-[30px]"
            onClick={() => setShowNav(false)}
          >
            {" "}
            <IoIosClose />
          </button>
          <div className="flex flex-col items-start justify-center -mt-[100px]">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className={`flex items-center gap-[5px] text-[14px] my-[20px] text-right ${
                  pathname === link.href
                    ? "font-bold text-[#2EA8A2] bg-[#fff] px-[10px] py-[5px] rounded-[5px]"
                    : "text-[#fff]"
                }`}
              >
                {" "}
                {link.icon} {link.name}
              </Link>
            ))}
            <Link
              href={"/login"}
              className="text-[14px] bg-[#fff] text-[#2EA8A2] px-[10px] py-[5px] rounded-[5px]"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;

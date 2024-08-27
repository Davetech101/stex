"use client";

import Link from "next/link";
import { AiOutlineStock } from "react-icons/ai";
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

const DesktopHeader = () => {
  const pathname = usePathname();
  return (
    <header className="hidden md:block py-[30px] px-[20px] flex items-center justify-between bg-gradient-to-r from-[#fff] to-[#2ea8a217] fixed top-[0] left-0 w-screen">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="text-[#2EA8A2] flex items-center text-[24px] font-bold animate-bounce"
        >
          <AiOutlineStock className="animate-bounce" />

          <p className="">
            ST<span className="italic">EX</span>
          </p>
        </Link>

          <div className="flex items-center gap-[40px]">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} className={`text-[16px] hover:text-[#2EA8A2] ${
                pathname === link.href
                  ? "font-bold text-[#2EA8A2]"
                  : "text-[black]"
              }`}>
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href={"/login"}
            className="text-[18px] text-[#2EA8A2] px-[12px] py-[5px] rounded-[5px] ml-[50px] hover:text-[#2EA8A2] hover:bg-[#fff] transition-all button-89"
          >
            Get started
          </Link>
      </div>
    </header>
  );
};

export default DesktopHeader;

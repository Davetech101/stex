"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import faq from "../_assets/faq.png";

const Data = [
  {
    question: "What is STEX?",
    answer:
      "STEX is a cutting-edge stock exchange platform that provides real-time market data, advanced trading tools, and educational resources for investors of all levels.",
  },
  {
    question: "How can I start trading on STEX?",
    answer:
      "To start trading on STEX, sign up for an account, complete the verification process, and deposit funds. Once your account is set up, you can begin trading immediately.",
  },
  {
    question: "What fees does STEX charge?",
    answer:
      "STEX offers competitive fees for trades, withdrawals, and other services. You can find detailed information about our fee structure on our pricing page.",
  },
  {
    question: "Is my personal information secure on STEX?",
    answer:
      "Yes, STEX uses advanced encryption and security protocols to protect your personal and financial information. We are committed to ensuring the highest levels of security for our users.",
  },
  {
    question: "What support options are available on STEX?",
    answer:
      "STEX offers 24/7 customer support through live chat, email, and a comprehensive help center. Our support team is here to assist you with any questions or issues.",
  },
];

const FaqHero = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between md:max-w-[1100px] md:mx-auto">
        <Image
          src={faq}
          alt="faq"
          width={500}
          height={500}
          quality={100}
          className="w-[100%] md:w-[60%] md:h-[600px] h-content rounded-[10px]"
        />
        <div className="bg-[#2ea8a217] p-[20px] rounded-md shadow-md w-full md:w-[60%]">
          <h2 className="text-2xl font-semibold mb-[20px]">Frequently Asked Questions</h2>
          <ul className="space-y-[10px] w-full">
            {Data.map((faq, index) => (
              <li key={index}>
                <div
                  className="cursor-pointer p-[15px] bg-[#2EA8A2] text-white rounded-md"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-[15px] bg-white text-black rounded-md mt-[5px]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;

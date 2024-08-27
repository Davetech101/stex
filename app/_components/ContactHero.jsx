"use client";

import Image from "next/image";
import contact from "../_assets/contact.png";
import AnimateSection from "./AnimateSection";

const ContactHero = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <AnimateSection>
      <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
        <div className="flex flex-col md:flex-row items-center md:justify-between md:max-w-[1100px] md:mx-auto space-y-8 md:space-y-0">
          <Image
            src={contact}
            alt="contact"
            width={500}
            height={500}
            quality={100}
            className="w-[100%] md:w-[60%] md:h-[600px] h-auto rounded-[10px]"
          />

          <form
            onSubmit={onSubmit}
            className="w-full md:w-[60%] bg-[#2ea8a217] p-[20px] rounded-md shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-[20px]">Contact Us</h2>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-[14px] font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="p-[10px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2EA8A2]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-[14px] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="p-[10px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2EA8A2]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[14px] font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="p-[10px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2EA8A2]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2EA8A2] text-white p-[10px] rounded-full hover:bg-[#1e7f7a] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </AnimateSection>
  );
};

export default ContactHero;

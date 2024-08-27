"use client";

import Header from "../_components/Header";
import Image from "next/image";
import login from "../_assets/login.png";
import AnimateSection from "../_components/AnimateSection"
import Link from "next/link";

const page = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
  };
  return (
    <>
    <Header/>
    <AnimateSection>
      <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
        <div className="flex flex-col md:flex-row items-center md:justify-between md:max-w-[1100px] md:mx-auto space-y-8 md:space-y-0">
          <form
            onSubmit={onSubmit}
            className="w-full md:w-[60%] bg-[#2ea8a217] p-[20px] rounded-md shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-[20px]">Welcome back</h2>

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
              <label htmlFor="password" className="text-[14px] font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                className="p-[10px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2EA8A2]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2EA8A2] text-white p-[10px] rounded-full hover:bg-[#1e7f7a] transition duration-200 rounded-full"
            >
              Send Message
            </button>

            <p className="text-[14px]">Don&apos;t have an account? <Link href="/sign-up" className="text-[#2EA8A2]">Sign up</Link></p>
          </form>

          <Image
            src={login}
            alt="login"
            width={500}
            height={500}
            quality={100}
            className="w-[100%] md:w-[60%] md:h-[600px] h-auto"
          />

        </div>
      </section>
    </AnimateSection></>
  )
}

export default page
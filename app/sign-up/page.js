"use client";

import Header from "../_components/Header";
import Image from "next/image";
import signup from "../_assets/signup.png";
import AnimateSection from "../_components/AnimateSection";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    e.target.reset();
  };

  return (
    <>
      <Header />
      <AnimateSection>
        <section className="pt-[100px] px-[15px] md:pt-[100px] pb-[100px]">
          <div className="flex flex-col md:flex-row items-center md:justify-between md:max-w-[1100px] md:mx-auto space-y-8 md:space-y-0">
            <form
              onSubmit={onSubmit}
              className="w-full md:w-[60%] bg-[#2ea8a217] p-[20px] rounded-md shadow-md space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-[20px]">Create Your Account</h2>

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

              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-[14px] font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  className="p-[10px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2EA8A2]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2EA8A2] text-white p-[10px] rounded-full hover:bg-[#1e7f7a] transition duration-200"
              >
                Sign Up
              </button>

              <p className="text-[14px]">
                Already have an account?{" "}
                <Link href="/login" className="text-[#2EA8A2]">
                  Log in
                </Link>
              </p>
            </form>

            <Image
              src={signup}
              alt="signup"
              width={500}
              height={500}
              quality={100}
              className="w-[100%] md:w-[60%] md:h-[600px] h-auto"
            />
          </div>
        </section>
      </AnimateSection>
    </>
  );
};

export default SignUpPage;

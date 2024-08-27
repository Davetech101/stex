"use client";

import Image from "next/image";
import future from "../_assets/future.png";
import AnimateSection from "./AnimateSection";

const Future = () => {
  return (
    <AnimateSection>
      <section className="p-[15px]">
        <div className="max-w-[1100px] mx-auto md:flex items-center justify-between gap-[20px]">
          <div className="">
            <p className="text-[20px] font-semibold md:text-[26px]">
              Building The <br /> Future of Decentralized Finance
            </p>

            <p className="text-[14px] text-gray-700 md:text-[18px]">
              We are committed to creating a more inclusive and sustainable
              financial ecosystem. this step is not only about changing the way
              we transact but also about redefining the meaning of financial
              freedom and empowering individuals to manage their financial
              future independently
            </p>
          </div>

          <Image
            src={future}
            alt="chart"
            width={500}
            height={500}
            quality={100}
            className="w-[100%] md:w-[50%] md:h-[500px] h-content rounded-[10px]"
          />
        </div>
      </section>
    </AnimateSection>
  );
};

export default Future;

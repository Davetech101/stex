"use client";

import Image from "next/image";
import AnimateSection from "./AnimateSection";
import chart from "../_assets/chart.png";

const TechnicalChart = () => {
  return (
    <AnimateSection>
      <section className="p-[15px]">
        <div className="max-w-[1100px] mx-auto md:flex flex-row-reverse items-center justify-between gap-[20px]">
          <div className="">
            <p className="text-[20px] font-semibold md:text-[26px]">
              Technical Charts <br /> to predict Stock movements
            </p>

            <p className="text-[14px] text-gray-700 md:text-[18px]">
              Accurate price predictions with in-dept chart analysis,
              comprehensive technical charts reveal hidden patterns, identify
              trends and anticipate price changes.
            </p>
          </div>

          <Image
            src={chart}
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

export default TechnicalChart;

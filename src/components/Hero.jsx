import React from "react";
import styles from "../style";
import { airbnb, discount, robot_hand } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16  px-6`}
    >
      <div className="flex flex-row justify-between item-center w-full">
        <h1
          className="flex-1 font-poppins font-semibold lg:text-[76px] text-[2.3rem]  text-white
          ss:leading-[100px] leading-[75px] uppercase text-gradient tracking-widest"
        >
          Luminescence
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot_hand}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-20 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
  </section>
);
export default Hero;

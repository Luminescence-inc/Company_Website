import React from "react";
import styles from "../style";
import { robot_hand } from "../assets";

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
        A technological ecosystem that fosters innovative growth, by delivering
        innovative value to our clients and customers thereby disrupting legacy
        markets through validated learning.
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
  </section>
);
export default Hero;

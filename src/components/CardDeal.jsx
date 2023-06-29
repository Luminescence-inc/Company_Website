import React from "react";
import { Ripple } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Ripple</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ReStrategizing and repositioning event/Talent management using new
        thinking and new technology.
      </p>
    </div>
    <div className={`${layout.sectionImg} w-[100%] relative`}>
      <img src={Ripple} alt="card" className=" object-contain w-[30rem] " />
    </div>
  </section>
);

export default CardDeal;

import React from "react";
import { rMK } from "../assets";
import styles, { layout } from "../style";

const SmartShield = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Smart Shield</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Smart Shield is a smart product that eradicates mosquitoes and is
        equipped with solar and rechargeable capability to aid use when there is
        no power supply in certain areas.
      </p>
    </div>
    <div className={`${layout.sectionImg} w-[100%] relative`}>
      <img src={rMK} alt="card" className=" object-contain w-[30rem] " />
    </div>
  </section>
);

export default SmartShield;

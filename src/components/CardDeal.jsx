import React from "react";
import { Ripple } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Ripple</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A universal solution where DJs can sign up, upload their availability,
        and snips from their previous events and then they can be booked by
        anyone in their locale or around the world. We want Djs to be universal
        such that DJs can go viral on the platform due to their mixes and the
        sounds they generate.
      </p>
    </div>
    <div className={`${layout.sectionImg} w-[100%]`}>
      <img src={Ripple} alt="card" className=" object-contain w-[30rem] " />
    </div>
  </section>
);

export default CardDeal;

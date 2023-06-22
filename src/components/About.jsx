import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";

const Card = ({ title, message }) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] feature-card ${layout.sectionImg}`}
    >
      <h2 className={styles.heading2}>{title}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 md:h-[10rem]`}>
        {message}
      </p>
    </div>
  );
};
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] md:w-[20rem] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
  let vision = `To be a leading center of excellence for future innovative thoughts, market strategies, technology and design where like minds connect to create solutions and services that are of great use to mankind.
  `;
  let mission = `To create cohesive and ethical technology for businesses and individuals to aide day-to-day business operation and make activities easier`;
  return (
    <section id="about" className={layout.sectionCol}>
      <div className={layout.section}>
        <Card title="Vision" message={vision} />
        <Card title="Mission" message={mission} />
      </div>
      <h2 className={`${styles.heading2} ${styles.flexCenter}`}>Core values</h2>
      <div>
        <div className={`${layout.section} `}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

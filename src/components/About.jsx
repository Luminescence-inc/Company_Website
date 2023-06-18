import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";

const Card = ({ title, message }) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] feature-card ${layout.sectionImg}`}
    >
      <h2 className={styles.heading2}>{title}</h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>{message}</p>
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
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
  let message1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th       industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with
  `;
  return (
    <section id="about" className={layout.section}>
      <Card title="Vision" message={message1} />
      <Card title="Mission" message={message1} />
      <div className={`${layout.sectionImg} flex-col`}>
        <h2 className={styles.heading2}>Core values</h2>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;

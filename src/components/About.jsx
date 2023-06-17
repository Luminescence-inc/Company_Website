import React from "react";
import styles, { layout } from "../style";

const Card = ({ title, message }) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] feature-card ${styles.flexCenter} ${layout.sectionImg}`}
    >
      <h2 className={styles.heading2}>{title}</h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>{message}</p>
    </div>
  );
};

const About = () => {
  let message1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th       industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with
  `;
  return (
    <section id="about" className={layout.section}>
      <Card title="Vision" message={message1} />
      <Card title="Mission" message={message1} />
    </section>
  );
};

export default About;

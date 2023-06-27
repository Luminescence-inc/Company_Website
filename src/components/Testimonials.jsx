import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="people"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* TODO */}
    <div className=" absolute -right-[50%] w-[60%] h-[60%] blue__gradient" />
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;

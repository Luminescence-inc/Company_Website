import { homeExplorer } from "../assets";
import styles, { layout } from "../style";

const CTA = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} w-[100%] `}>
      <img
        src={homeExplorer}
        alt="billing"
        className=" w-[32rem] object-contain z-[5]"
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Home Explorer</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        BizConnect is a directory of businesses and services rendered by a
        particular group of people based on their country of origin and current
        location.This product be able to connect you with people from your
        country who offer a particular service around your location
      </p>
    </div>
  </section>
);

export default CTA;

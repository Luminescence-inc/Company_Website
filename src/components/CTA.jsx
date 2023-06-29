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
        Rethinking the business of real estate across the globe
      </p>
    </div>
  </section>
);

export default CTA;

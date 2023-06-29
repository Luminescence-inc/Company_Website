import { bizConnect } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} w-[100%] `}>
      <img
        src={bizConnect}
        alt="billing"
        className=" w-[32rem] relative object-contain z-[5]"
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>BizConnect</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      An online e-commerce store that revolutionalizes and rethinks the way online business is been done
      </p>
    </div>
  </section>
);

export default Billing;

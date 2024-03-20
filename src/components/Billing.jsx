import { bizConnect24 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} w-[100%] `}>
      <a className="cursor-pointer" href="https://www.bizconnect24.com/">
        <img
          src={bizConnect24}
          alt="billing"
          className=" w-[32rem] relative object-contain z-[5]"
        />
      </a>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <a className="cursor-pointer" href="https://www.bizconnect24.com/">
          BizConnect24
        </a>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        BizConnect24 addresses challenges for immigrant entrepreneurs with its
        user-friendly platform, enabling easy showcasing and connection with
        customers. Innovative features like targeted marketing and community
        engagement empower businesses to boost visibility and expand reach. As a
        catalyst for economic growth and cultural exchange, BizConnect24 fosters
        meaningful connections and community integration.
      </p>
    </div>
  </section>
);

export default Billing;

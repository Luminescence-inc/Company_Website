import React from "react";
import style from "./style";
import {
  About,
  Billing,
  CardDeal,
  CTA,
  Footer,
  Hero,
  Navbar,
  Testimonials,
  SmartShield,
} from "./components";

const App = () => (
  <div className="bg-primary  w-full overflow-hidden">
    <div className={` ${style.paddingX}  ${style.flexCenter}`}>
      {/* Navigation */}
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero */}
    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/* Body */}
    <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <About />
        <SmartShield />
        <Billing />
        <CardDeal />
        <CTA />

        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

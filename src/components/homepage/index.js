import React from "react";
import Header from "./header";
import Sologan from "./sologan";
import Introdule from "./introdule";
import LearnAbout from "./learnAbout";
import Connect from "./connect";
import Footer from "./footer";
import WhyUs from "./whyus";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Sologan />
      <Introdule />
      <WhyUs />
      <LearnAbout />
      <Connect />
      <Footer />
    </div>
  );
}

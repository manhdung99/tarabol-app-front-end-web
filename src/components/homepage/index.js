import React from "react";
import Header from "./header";
import Sologan from "./sologan";
import Introdule from "./introdule";
import LearnAbout from "./learnAbout";
import Social from "./social";
import Footer from "./footer";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Sologan />
      <Introdule />
      <LearnAbout />
      <Social />
      <Footer />
    </div>
  );
}

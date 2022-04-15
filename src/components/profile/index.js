import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Nav from "./nav";
import Content from "./content";
export default function Profile() {
  const [isChangeUsername, setIsChangeUsername] = useState(false);
  const [isChangeGmail, setIsChangeGmail] = useState(false);
  const [isChangePhone, setIsChangePhone] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-535px)] sm:mt-[88px] md:mt-0 md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex sm:flex-col md:flex-row justify-between mt-12">
        <div className="sm:w-full md:w-[20%]">
          <Nav />
        </div>
        <div className="sm:w-full md:w-[70%]">
          <Content
            isChangeUsername={isChangeUsername}
            setIsChangeUsername={setIsChangeUsername}
            isChangeGmail={isChangeGmail}
            setIsChangeGmail={setIsChangeGmail}
            isChangePhone={isChangePhone}
            setIsChangePhone={setIsChangePhone}
            isChangePass={isChangePass}
            setIsChangePass={setIsChangePass}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

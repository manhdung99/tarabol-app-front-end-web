import React, { useState } from "react";
import Header from "../header";
import UserMenuBar from "./usermenubar";
import Footer from "../footer";
import UserBody from "./userbody";
export default function UserPage() {
  const [isSortName, setIsSortName] = useState(false);
  const [isSortProcess, setIsSortProcess] = useState(false);
  const [sortSelected, setSortSelected] = useState("");
  return (
    <>
      <Header isSearch="true" isLogin={true} />
      <div className=" flex sm:flex-col md:flex-row sm:max-w-[95%] min-h-[calc(100vh-560px)] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex md:mt-6 lg:mt-8">
        <div className="sm:w-[100%] md:w-[20%]">
          <UserMenuBar setSortSelected={setSortSelected} />
        </div>
        <div className="sm:w-[100%] md:w-[80%]  relative">
          <UserBody
            sortSelected={sortSelected}
            setSortSelected={setSortSelected}
            isSortName={isSortName}
            setIsSortName={setIsSortName}
            isSortProcess={isSortProcess}
            setIsSortProcess={setIsSortProcess}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

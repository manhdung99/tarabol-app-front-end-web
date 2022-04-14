import React, { useState } from "react";
import Header from "../header";
import Menubar from "./menubar";
import Footer from "../footer";
import BodyItem from "./bodyitem";
function Market() {
  const [isSortPrice, setIsSortPrice] = useState(false);
  const [isSortName, setIsSortName] = useState(false);
  const [sortSelected, setSortSelected] = useState("");
  return (
    <>
      <Header isSearch={true} />
      <div className=" sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] min-h-[calc(100vh-560px)] xl:max-w-[1200px] mx-auto flex sm:flex-col md:flex-row mt-4 ">
        <div className="sm:w-[100%] md:w-[20%]">
          <Menubar
            isSortPrice={isSortPrice}
            isSortName={isSortName}
            setSortSelected={setSortSelected}
          />
        </div>
        <div className="sm:w-[100%] md:w-[80%] relative mt-4">
          <BodyItem
            sortSelected={sortSelected}
            setSortSelected={setSortSelected}
            isSortName={isSortName}
            setIsSortName={setIsSortName}
            isSortPrice={isSortPrice}
            setIsSortPrice={setIsSortPrice}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Market;

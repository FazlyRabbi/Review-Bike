import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import notfound from "../../assets/notfound.webp";

const Notfound = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-9 flex justify-center  ">
        <div className="flex justify-center ">
          <img src={notfound} alt="this is bike" className=" py-8" />
        </div>
      </div>
    </>
  );
};

export default Notfound;

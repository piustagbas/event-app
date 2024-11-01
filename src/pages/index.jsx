import React from "react";
import Navbar from "../component/Navbar";
import EventDetails from "./EventDetails";
import Eventhistory from "./Eventhistory";

const Landingpage = () => {
  return (
    <div className="flex flex-col h-full w-[375px] mx-auto  md:flex md:flex-col md:w-full md:mx-auto md:mr-11   sm:flex sm:flex-col sm:w-full sm:h-full">
      <Navbar />
    </div>
  );
};

export default Landingpage;

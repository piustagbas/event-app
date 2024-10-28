import React from "react";
import Navbar from "../component/Navbar";
import EventDetails from "./EventDetails";
import Eventhistory from "./Eventhistory";

const Landingpage = () => {
  return (
    <div className="flex flex-col h-full w-[375px] mx-auto   sm:flex sm:flex-col sm:w-full sm:mx-auto sm:mr-11">
      <Navbar />
    </div>
  );
};

export default Landingpage;

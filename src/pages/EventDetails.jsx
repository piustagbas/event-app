


import React, { useRef } from "react";
import SummarySection from "./SummarySection";
import BarChart from "../component/BarChart";
import Eventhistory from "./Eventhistory";
import Slider from "react-slick"; // Import React Slick
import { useNavigate } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventDetails = () => {
  // Array of image URLs for the slideshow
  const images = [
    "imges/Slide.png",
    "imges/Slide (1).png",
    "imges/Slide (2).png",
  ];

  // Array of text content corresponding to each image
  const content = [
    {
      title: "Latest News & Updates",
      description:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      title: "Upcoming Event Highlights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, massa quis aliquet pretium, nisi velit fermentum erat, fringilla quisque non fringilla purus.",
    },
    {
      title: "Exciting Announcements",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    },
  ];

  // Reference for Slider
  const sliderRef = useRef(null);

  const navigate = useNavigate();


  // Settings for the React Slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto-slide every 3 seconds
    arrows: false, // Disable default arrows
  };

  // Custom navigation functions
  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="h-full mt-3 sm:ml-8 sm:w-[1076px] sm:flex sm:flex-col sm:mx-auto sm:mt-12 ">
      <h3 className="w-[249px] h-[20px] ml-5 font-[17px] sm:text-[22px] mb-2 text-[#000000] sm:ml-0 sm:w-[322px] sm:h-[20px] sm:font-medium">
        Welcome! Here’s your summary
      </h3>
      <SummarySection />

      <div className="h-[650px] mt-2 w-[375px] sm:mt-9 sm:mb-9 sm:h-[320px] sm:w-[1076px]">
        <div className="h-[610px] w-[375px] flex flex-col gap-[16px] items-center justify-center sm:gap-[8px] sm:flex-row sm:h-[320px] sm:w-[1076px] sm:mt-9">
       

       <div className="flex flex-col mt-9">
       <h1 className=" text-[17px] font-[500] sm:font-[500] sm:text-[22px] text-[#000000] mb-1">
              Event Registrations per month
            </h1>

            <div className="registration h-[284px] w-[350px] sm:ml-0 flex-col sm:flex sm:flex-col sm:items-start sm:w-[560px] sm:h-[335px] sm:mt-2">
           
           <div className="w-[331px] h-[260px] sm:w-[554px] sm:h-[320px]">
             <BarChart />
           </div>
         </div>

       </div>
       

          {/* React Slick Carousel with Custom Arrows */}
          <div className="bg-cover bg-center w-[335px] h-[320px] sm:w-[510px] flex flex-col">
            <Slider ref={sliderRef} {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <div
                    className="flex flex-col items-center justify-center sm:mt-9 w-[335px]  sm:h-[320px] sm:w-[510px]"
                    style={{
                      backgroundImage: `url('${image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >

<div className="   flex items-center mr-4 justify-between w-[303px] h-[75px] mt-36   sm:flex sm:items-center sm:justify-between sm:w-[480px] sm:mt-36">
              <img
                src="imges/Left Button.png"
                alt="previous"
                className="w-[24px] h-[24px] ml-3 sm:ml-5 cursor-pointer"
                onClick={handlePrevious}
              />
              <img
                src="imges/Right Button.png"
                alt="next"
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={handleNext}
              />
            </div>
                    {/* Content for the current slide */}
                    <div className="flex flex-col items-start  w-[303px] mb-2 sm:flex sm:flex-col sm:items-center sm:w-[480px] sm:ml-7 sm:mt-9">
                      <h1 className="text-[#FFFFFF] text-[12px]  w-[240px] sm:w-[480px]">
                        {content[index].title}
                      </h1>
                      <p className="text-[#FFFFFF] text-[12px] w-[303px] sm:w-[480px] mt-2">
                        {content[index].description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Eventhistory />
    </div>
  );
};

export default EventDetails;

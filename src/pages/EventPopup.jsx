import React from "react";
import Navbar from "../component/Navbar";
import EventDetails from "./EventDetails";
import Eventhistory from "./Eventhistory";

const EventPopup = ({ event, onClose }) => {
  const Profile = [
    { img: "imges/Image.png" }, // First image
    { img: "imges/Image (1).png" }, // Second image
    { img: "imges/Image (2).png" }, // Third image
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 left-0 right-0 top-0 bottom-0 backdrop-blur-sm  bg-[#101c161d]">
      <div className="history flex flex-col w-[335px] h-full text-[#64748B] border hover:shadow-lg shadow-md bg-white   sm:flex sm:flex-col sm:w-[440px] sm:text-[#64748B] sm:border sm:hover:shadow-lg sm:shadow-md sm:bg-white sm:h-[380px]">
        <div className=" w-[330px]  flex justify-between items-center  sm:w-[430px]  sm:flex sm:justify-between sm:items-center ">
          <div className="flex flex-col w-[247px] h-[48px] ml-6 mt-9 sm:flex sm:flex-col sm:w-[352px] sm:h-[48px] sm:ml-6 sm:mt-9">
            <h1 className="text-[#334155] font-[600] text-[16px]">
              {event.eventName}
            </h1>
            <p className="text-[14px] font-[400]">{event.eventDate}</p>
          </div>
          <img
            src="imges/Icon Button.png"
            alt="close"
            className="mr-5"
            onClick={onClose}
          />
        </div>

        <div className="flex w-[335px] h-[68px] justify-start ml-6 mt-3 sm:flex sm:w-[440px] sm:h-[68px] sm:justify-start sm:ml-6 sm:mt-3">
          <p className="text-[14px] font-[400]">{event.EventDescription}</p>
        </div>
        <div className="flex flex-col w-[335px]  h-[156px] sm:flex sm:flex-col sm:w-[440px]  sm:h-[156px]">
          <div className="flex ml-6 mt-6 relative">
            {Profile.map((d, i) => (
              <img
                key={i}
                src={d.img}
                alt=""
                className={`w-[32px] h-[32px] rounded-full border border-green-500 ${
                  i === 0 ? "z-30" : i === 1 ? "z-20 -ml-2" : "z-10 -ml-2"
                }`}
              />
            ))}
          </div>
          <p className="w-[287px] h-[60px] ml-6 text-[14px]   sm:mt-3 sm:w-[392px] sm:h-[40px] sm:ml-6 sm:text-[14px] mt-3">
            {event.eventSpeaker}
          </p>
          <p className="popupAtd w-[392px] h-[40px] ml-6 text-[14px] mt-1 ">
            {event.eventAttendees}
          </p>
        </div>

        <div className="popupbtn flex flex-col w-[335px] gap-2 mb-3 h-[174px] bg-[#F8FAFC] items-center justify-center   sm:flex sm:flex-row  sm:w-[440px]  sm:h-[84px]  sm:bg-[#F8FAFC]  sm:items-center  sm:justify-between ">
          <button className="popupone w-[287px] text-[14px]   h-[36px] text-[#484a4d] bg-white border border-[#E2E8F0] rounded-[2px]  sm:w-[70px] sm:text-[14px]  sm:h-[36px] sm:text-[#484a4d] sm:bg-white sm:border sm:border-[#E2E8F0] sm:ml-[16px] sm:rounded-[2px]">
            Edit
          </button>
          <div className=" popupbtnchild flex gap-2 flex-col w-[287px] h-[80px] sm:flex   sm:flex-row sm:w-[312px] sm:h-[36px]">
            <button className="popuptwo w-[287px] sm:w-[70px]  h-[36px] text-[#FFFFFF] text-[14px] bg-[#F43F5E] border border-[#E2E8F0] rounded-[2px]">
              Delete
            </button>
            <button className="popthree w-[287px] sm:w-[159px] text-[14px] h-[36px] text-[#ffffff]  sm:text-[#ffffff] bg-[#8576FF] sm:bg-[#8576FF] border border-[#E2E8F0]   rounded-[2px]">
              Mark as completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;

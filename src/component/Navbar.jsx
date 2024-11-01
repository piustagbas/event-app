import React, { useState, useEffect } from "react";
import EventDetails from "../pages/EventDetails";
import { CiHome } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage collapse/expand
  const [menuIcon, setMenuIcon] = useState(
    "imges/solar_hamburger-menu-broken.png"
  );

  // Added collapse item to navItems
  const navItems = [
    { name: "Home", icon: <CiHome /> },
    { name: "Events", icon: <LuCalendarDays /> },
    { name: "Speakers", icon: <MdOutlineRecordVoiceOver /> },
    { name: "Reports", icon: <BiMessageSquareDetail /> },
    { name: "Notifications", icon: <IoNotificationsOutline /> },
    { name: "Messages", icon: <PiChatsCircleLight /> },
    { name: "Settings", icon: <IoSettingsOutline /> },
    // Collapse/Expand item
    {
      name: isCollapsed ? "Expand" : "Collapse",
      icon: isCollapsed ? <FaAnglesRight /> : <FaAnglesLeft />,
      action: () => setIsCollapsed(!isCollapsed), // Toggle collapse/expand on click
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIcon(
      isMenuOpen ? "imges/solar_hamburger-menu-broken.png" : "imges/ibutn.png"
    );
    console.log("Menu open status:", isMenuOpen); // Debugging
  };

  return (
    <div className="flex flex-col h-full md:flex md:flex-row md:w-full md:mx-auto md:justify-start   sm:flex sm:flex-col sm:w-full sm:mx-auto sm:justify-start">
      <div
        className={`flex w-[375px] border border-green-500 flex-col justify-center h-full sm:flex sm:flex-col md:w-[240px] sm:gap-8 sm:h-full sm:w-full transition-width duration-300 ${
          isCollapsed ? "w-[80px]" : "w-[260px]"
        } ${darkMode ? "text-white bg-[#484554]" : "bg-white text-black"}`}
      >
        <div className=" w-[375px] md:flex md:flex-col h-[1020px] hidden">
          <div className=" md:flex md:ml-3 sm:items-center sm:justify-between sm:fixed  sm:w-[240px] border border-red-600 sm:hidden">
            <h2 className="text-[#2563EB] font-[600] ml-2">Full Logo</h2>
            <img
              src={menuIcon}
              alt="show-nav-bar"
              className="w-7 h-7 mt-2 ml-3 cursor-pointer sm:hidden" // Removed 'sm:hidden' for testing
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col w-[224px] mt-12 gap-4 ml-3">
            {navItems.map((item, index) => (
              <div
                key={index}
                onClick={item.action} // Handle collapse/expand action if available
                className="flex items-center gap-4 px-2 py-2 hover:bg-[#FCF7FF] hover:text-[#8576FF] rounded-md cursor-pointer transition-all duration-300"
              >
                <div className="w-[20px] h-[20px] transition-all duration-200 hover:filter hover:invert-[44%] hover:sepia-[80%] hover:saturate-[3000%] hover:hue-rotate-[235deg] hover:brightness-[94%] hover:contrast-[104%]">
                  {item.icon}
                </div>
                {/* Slide in/out the label */}
                <span
                  className={`whitespace-nowrap transition-all duration-300 ${
                    isCollapsed
                      ? "opacity-0 transform -translate-x-10"
                      : "opacity-100 transform translate-x-0"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          {/* Dark Mode Toggle */}
          <div className="nav-item dark-mode-toggle flex items-center mt-4 ml-3">
            <label className="slider-container">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkModeToggle}
                className="slider-checkbox"
              />
              <span className="slider"></span>
            </label>
            <span
              className={`ml-4 transition-opacity duration-300 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              Dark Mode
            </span>
          </div>

          {/* User Info */}
          <div className="flex h-[42px] items-center mt-6 ml-3">
            <img src="imges/Avatar.png" alt="" className="w-[32px] h-[32px]" />
            <div
              className={`ml-3 text-start transition-opacity duration-300 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="block text-[12px] font-[400]">Rudra Devi</span>
              <span className="block text-[12px] font-[400]">
                rudra.devi@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:w-[700px] w-[375px] sm:h-full ">
          <div className=" flex ml-3 items-center justify-between w-[350px] sm:mt-4 sm:w-[680px] sm:mb-6 md:w-[240px]  md:hidden fixed bg-white">
            <h2 className="text-[#2563EB] font-[600] ml-2 ">Full Logo</h2>
            <img
              src={menuIcon}
              alt="show-nav-bar"
              className="w-7 h-7 mt-2 ml-3 cursor-pointer" // Removed 'sm:hidden' for testing
              onClick={toggleMenu}
            />
          </div>
          {isMenuOpen && (
            <div className="w-[375px] sm:w-[700px] sm:h-[full] flex flex-col sm:mt-6 ">
              <div className="flex flex-col w-[375px] mt-6 gap-4 ml-3">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={item.action} // Handle collapse/expand action if available
                    className="flex items-center gap-4 px-2 py-2 hover:bg-[#FCF7FF] hover:text-[#8576FF] rounded-md cursor-pointer transition-all duration-300"
                  >
                    <div className="w-[20px] h-[20px] transition-all duration-200 hover:filter hover:invert-[44%] hover:sepia-[80%] hover:saturate-[3000%] hover:hue-rotate-[235deg] hover:brightness-[94%] hover:contrast-[104%]">
                      {item.icon}
                    </div>
                    {/* Slide in/out the label */}
                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${
                        isCollapsed
                          ? "opacity-0 transform -translate-x-10"
                          : "opacity-100 transform translate-x-0"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}

                <div className="nav-item dark-mode-toggle flex items-center mt-4 ml-3  sm:flex sm:items-center sm:mt-4 sm:ml-3">
                  <label className="slider-container">
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={handleDarkModeToggle}
                      className="slider-checkbox"
                    />
                    <span className="slider"></span>
                  </label>
                  <span
                    className={`ml-4 transition-opacity duration-300 ${
                      isCollapsed ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Dark Mode
                  </span>
                </div>

                <div className="flex h-[42px] items-center mt-6 ml-3">
                  <img
                    src="imges/Avatar.png"
                    alt=""
                    className="w-[32px] h-[32px]"
                  />
                  <div
                    className={`ml-3 text-start transition-opacity duration-300 ${
                      isCollapsed ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="block text-[12px] font-[400]">
                      Rudra Devi
                    </span>
                    <span className="block text-[12px] font-[400]">
                      rudra.devi@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Dark Mode Toggle */}

              {/* User Info */}
            </div>
          )}
        </div>
      </div>
      <EventDetails />
    </div>
  );
};

export default Navbar;



import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Namedrop = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Name");

  const options = [
    { value: "A - Z", label: "A - Z" },
    { value: "Z - A", label: "Z - A" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSortChange(option.value); // Call onSortChange to pass the selected value
  };

  return (
    <div className="relative">
      <div
        className="flex history w-[335px] h-[36px] justify-center items-center sm:w-[88px] sm:h-[36px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#000000] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="history w-[335px] flex items-center justify-center h-[36px] sm:w-[90px] sm:h-[36px] rounded-[2px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#000000] focus:outline-none cursor-pointer">
          <p className="mr-3">{selectedOption}</p>
          <FaChevronDown />
        </div>
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-[335px] sm:w-[88px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#000000] z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Namedrop;

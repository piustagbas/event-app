


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown } from "react-icons/fa";

// Custom styles for DatePicker
const customStyles = {
  datePicker: {
    width: '100%',
    maxWidth: '375px',
   
  },
};

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date) => {
    if (!date) return "Date";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="CustomDatePicker relative flex items-center">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          onDateChange(date);
          setIsOpen(false); // Close the dropdown when a date is selected
        }}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        className="hidden"
        popperPlacement="bottom-start" // Adjust the position of the calendar
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '0, 10', // Adjust offset as needed
          },
        }}
      />
      <div
        className="history flex items-center justify-center h-[36px] w-full max-w-[375px] sm:w-[700px] rounded-[2px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#000000] focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="history text-[#334155] mr-2">{formatDate(selectedDate)}</span>
        <FaChevronDown />
      </div>
      {/* Applying custom styles to the DatePicker */}
      <style jsx>{`
        .react-datepicker {
          width: ${customStyles.datePicker.width};
          max-width: ${customStyles.datePicker.maxWidth};
        }
      `}</style>
    </div>
  );
};

export default CustomDatePicker;

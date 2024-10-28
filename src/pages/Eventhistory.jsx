import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import CustomDatePicker from "./CustomDatePicker";
import CustomDropdown from "../component/Statusdrop";
import Namedrop from "../component/Namedrop";
import EventPopup from "./EventPopup";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

const Eventhistory = () => {
  const eventheader = [
    { title: "Event Name" },
    { title: "Date" },
    { title: "Speaker" },
    { title: "Status" },
  ];

  const eventdatas = [
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "567 Attendees",
    },
    {
      eventName: "Blockchain Revolution",
      eventDate: "2024-11-05",
      eventSpeaker: "Dr. Peter Smith",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      eventAttendees: "534 Attendees",
      EventDescription:
        "The Blockchain Revolution Conference is a premier event that brings together industry leaders, innovators, and enthus.",
    },

    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-12-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "600 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-25",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "740 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-11-12",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "564 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-09-28",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "120 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-10",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "130 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-11-19",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "408 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-18",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      attendees: "570 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-09-30",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "890 Attendees",
    },

    {
      eventName: "SCloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "567 Attendees",
    },
    {
      eventName: "BRevolution Conference",
      eventDate: "2024-11-05",
      eventSpeaker: "Dr. Peter Smith",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      eventAttendees: "534 Attendees",
      EventDescription:
        "The Blockchain Revolution Conference is a premier event that brings together industry leaders, innovators, and enthus.",
    },

    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "600 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "740 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "564 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "120 Attendees",
    },
    {
      eventName: "Cloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "130 Attendees",
    },
    {
      eventName: "ACloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "Completed",
      dotIcon: "imges/Ellipse.png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      attendees: "408 Attendees",
    },
    {
      eventName: "ACloud Innovation Summit",
      eventDate: "2024-10-15",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      attendees: "570 Attendees",
    },
    {
      eventName: "ACloud Innovation Summit",
      eventDate: "2023-10-15",
      eventSpeaker: "Jane Doe",
      status: "In progress",
      dotIcon: "imges/Ellipse (2).png",
      EventDescription: "gfxhgcjfjhfvkgkjgkh",
      eventAttendees: "890 Attendees",
    },
  ];

  const iconData = [
    {
      icon: <CiHome />,
      iconName: "Home",
    },
    {
      icon: <LuCalendarDays />,
      iconName: "Events",
    },
    {
      icon: <MdOutlineRecordVoiceOver />,
      iconName: "Speakers",
    },
    {
      icon: <BiMessageSquareDetail />,
      iconName: "Reports",
    },
    {
      icon: <CgProfile />,
      iconName: "Profile",
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState({});

  const handleCollapse = (index) => {
    setIsCollapsed((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const [sortOption, setSortOption] = useState("A - Z");
  const [timeSortOption, setTimeSortOption] = useState("Most Recent");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");
  const totalPages = Math.ceil(eventdatas.length / rowsPerPage);

  const handleSortChange = (selectedSortOption) => {
    setSortOption(selectedSortOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const filteredEvents = eventdatas.filter((event) => {
    const eventDate = new Date(event.eventDate);

    const statusCondition =
      selectedStatus === "Status" ||
      event.status.toLowerCase() === selectedStatus.toLowerCase();
    const dateCondition =
      !selectedDate || eventDate.toDateString() === selectedDate.toDateString();
    const searchCondition = event.eventName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return statusCondition && dateCondition && searchCondition;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "A - Z") {
      return a.eventName.localeCompare(b.eventName);
    } else if (sortOption === "Z - A") {
      return b.eventName.localeCompare(a.eventName);
    }
    return 0;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedEvents = sortedEvents.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col justify-center  mt-6  h-full w-[375px] mb-5   sm:mt-0   sm:ml-0 sm:flex sm:flex-col sm:mx-auto sm:h-[800px]  sm:w-[1076px] sm:mb-9">
      <div className="flex flex-col sm:mt-24 item-start h-full sm:h-[52px]">
        <h3 className="font-medium ml-6 mt-2 text-[17px]  text-[#000000] sm:font-medium sm:text-2xl sm:ml-0  sm:text-[#000000]">
          Events History
        </h3>
        <div className="flex flex-col gap-[6px] mt-3 items-center justify-center h-[286px] w-[375px] sm:mt-3 sm:flex sm:flex-row sm:gap-[8px] sm:items-center sm:w-[1076px] sm:h-[36px] sm:justify-between">
          <div className=" flex flex-col sm:flex sm:flex-row sm:items-center sm:w-[664px] sm:h-[36px] gap-[8px]">
            <di className="booking w-[335px] h-[36px] flex flex-row sm:flex sm:flex-row sm:w-[200px] sm:h-[36px] bg-white border border-[#E2E8F0] rounded-[2px] items-center relative z-10">
              <img
                src="imges/search.png"
                alt=""
                className="w-[20px] h-[20px]"
              />
              <input
                type="text"
                className="bg-white outline-none ml-2 w-[156px] h-[20px]  text-[#CBD5E1] relative z-10"
                placeholder="search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </di>

            <CustomDatePicker
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />

            <CustomDropdown onSelect={setSelectedStatus} />

            <Namedrop onSortChange={handleSortChange} />

            <h1 className="text-[#334155] font-[600] text-[14px]">
              {" "}
              Displaying {eventdatas.length} result
            </h1>
          </div>

          <div className="w-[335px] flex flex-col gap-[8px]  items-center sm:flex sm:flex-row sm:w-[332px] sm:items-center sm:gap-[8px]">
            <div className="flex w-[335px] h-[36px] justify-between items-center">
              <p className="text-[#334155]">Sort:</p>
              <select
                className="history justify-center w-[140px] h-[36px] rounded-[2px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#000000] focus:outline-none sm:justify-center sm:w-[140px] sm:h-[36px] sm:rounded-[2px] sm:border sm:border-[#E2E8F0] sm:bg-[#FFFFFF] sm:text-[#000000] sm:focus:outline-none relative z-10"
                onChange={(e) => setTimeSortOption(e.target.value)}
                value={sortOption}
              >
                <option value="Most Recent">Most Recent</option>
                <option value="Last Week">Last Week</option>
                <option value="Last Month">Last Month</option>
                <option value="Last Year">Last Year</option>
              </select>
            </div>

            <div className=" flex w-[335px] h-[36px] justify-between items-center">
              <div className="history">
                <img
                  src="imges/dots-vertical.png"
                  alt=""
                  className="border border-[#E2E8F0] w-[36px] h-[36px]"
                />
              </div>

              <div className="history flex w-[100px] h-[36px] justify-center border border-[#E2E8F0]  sm:flex sm:w-[100px] sm:h-[36px] sm:items-center sm:border sm:border-[#E2E8F0]">
                <div className=" flex w-[80px] items-center justify-between">
                  <img src="imges/download.png" alt="" />
                  <p className="text-[#334155] pl-2">Export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-12 sm:flex sm:flex-col sm:h-[528px] sm:w-[1076px] sm:mt-3">
        <div className="  sm:flex sm:flex-col sm:h-[528px] sm:w-[1076px] sm:mt-9">
          {/* Mobile View */}
          <div className="historytop flex justify-between bg-[#F1F5F9] h-[48px] items-center mt-3 w-[375px] sm:hidden">
            <div className=" flex ml-4 w-[330px] justify-between">
              <p className="text-[#64748B] pl-3">Event Name</p>
              <p className="text-[#64748B] pl-3">Status</p>
            </div>
          </div>

          {/* Default View */}
          <div className="historytop hidden sm:flex bg-[#F1F5F9] h-[48px] items-center mt-3 ">
            {eventheader.map((d, i) => (
              <div key={i} className="mt-4 w-[269px] h-[48px] ml-2 ">
                <p className="text-[#64748B] pl-3 ">{d.title}</p>
              </div>
            ))}
          </div>
        </div>

        {displayedEvents.length > 0 ? (
          displayedEvents.map((d, i) => (
            <div
              key={i}
              className="history flex flex-col items-center gap-[8px]"
              onClick={() => handleEventClick(d)} // This will now work for the entire div, except the button
            >
              <div className="history flex flex-col sm:hidden hover:bg-[#F2F2F7] sm:hover:bg-[#434348] transition-colors duration-300">
                <div className="flex justify-center bg-[#F1F5F9] h-[48px] items-center mt-3 w-[375px] sm:hidden">
                  <div className="history flex  justify-around h-[48px] items-center mt-3 w-[375px] sm:hidden">
                    <div className="flex items-center">
                      <button
                        className="pl-3 text-[#334155]"
                        onClick={(event) => {
                          event.stopPropagation(); // Prevent the collapse button from triggering the parent div's onClick
                          handleCollapse(i);
                        }}
                      >
                        {isCollapsed[i] ? <FaAngleDown /> : <FaAngleRight />}
                      </button>
                    </div>
                    <p className="text-[#64748B] text-[15px] ml-4">
                      {d.eventName}
                    </p>
                    <div
                      className={`flex rounded-[100px] ml-14 items-center justify-center w-[99px] h-[24px] ${
                        d.status === "Completed"
                          ? "bg-[#D1FAE5]"
                          : "bg-[#DBEAFE]"
                      }`}
                    >
                      <img
                        src={d.dotIcon}
                        alt="doticon"
                        className="w-[6px] h-[6px]"
                      />
                      <p
                        style={{
                          color:
                            d.status === "Completed" ? "#10B981" : "#3B82F6",
                        }}
                        className={`textcolor text-[12px] pl-2`}
                      >
                        {d.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional content for collapsed view */}
                {isCollapsed[i] && (
                  <div className="history w-[343px] ml-3 flex justify-between pl-4 text-[#334155]">
                    {/* Add collapsed content here */}
                    <p>{d.eventSpeaker}</p>
                    <p>{d.eventDate}</p>
                  </div>
                )}
              </div>

              {/* Default Desktop View */}
              <div className="boxhover hidden sm:flex items-center w-[1067px] h-[48px] hover:bg-[#d4d4dd] transition-colors duration-300">
                <div className="flex w-[708px] h-[48px] p-4">
                  <div className="flex w-[269px] h-[48px] justify-start">
                    <p className="text-[#64748B] w-[233px]">{d.eventName}</p>
                  </div>
                  <div className="flex w-[269px] h-[48px] justify-start">
                    <p className="text-[#64748B] pl-8">{d.eventDate}</p>
                  </div>
                  <div className="flex w-[269px] h-[48px] justify-center">
                    <p className="text-[#64748B]">{d.eventSpeaker}</p>
                  </div>
                </div>
                <div className="divflex flex w-[269px] justify-center">
                  <div
                    className={`flex rounded-[100px] ml-14 items-center justify-center w-[99px] h-[24px] ${
                      d.status === "Completed" ? "bg-[#D1FAE5]" : "bg-[#DBEAFE]"
                    }`}
                  >
                    <img
                      src={d.dotIcon}
                      alt="doticon"
                      className="w-[6px] h-[6px]"
                    />
                    <p
                      style={{
                        color: d.status === "Completed" ? "#10B981" : "#3B82F6",
                      }}
                      className={`textcolor text-[12px] pl-2`}
                    >
                      {d.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>

      {/* Pagination and Rows Selector */}
      <div className="hidden sm:h-[36px] sm:flex sm:w-full sm:mt-24 sm:justify-between">
        <div className="paging flex w-[208px] h-[36px] sm:flex sm:w-[1074px] sm:h-[36px]">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            siblingCount={isMobile ? -1 : 5}
            boundaryCount={1}
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#8576FF",
                color: "#fff",
              },
              "& .MuiPaginationItem-previousNext": {
                backgroundColor: "#8576FF",
                border: "1px solid #E2E8F0",
                borderRadius: "2px",
                "&:hover": {
                  backgroundColor: "#8576FF",
                },
              },
            }}
          />
        </div>
        <div className="w-[96px] sm:flex sm:w-[145px] text-[#334155] sm:items-center">
          <p className="hidden sm:block">Show:</p>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="w-[96px] justify-center sm:w-[140px] h-[36px] rounded-[2px] border border-[#E2E8F0] bg-[#FFFFFF] focus:outline-none"
          >
            <option value={10}>10 rows</option>
            <option value={9}>9 rows</option>
            <option value={7}>7 rows</option>
            <option value={6}>6 rows</option>
          </select>
        </div>
      </div>

      {/* Mobile View Pagination */}
      <div className="totalpage bg-white flex w-[375px] h-[36px] mt-3 justify-between items-center sm:hidden">
        <div className="paging flex w-[250px] h-[36px] sm:hidden">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            siblingCount={isMobile ? -1 : 5}
            boundaryCount={1}
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#8576FF",
                color: "#fff",
              },
              "& .MuiPaginationItem-previousNext": {
                backgroundColor: "#8576FF",
                border: "1px solid #E2E8F0",
                borderRadius: "2px",
                "&:hover": {
                  backgroundColor: "#8576FF",
                },
              },
            }}
          />
        </div>
        <div className="w-[100px] text-[#334155] sm:hidden">
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="totalpage w-[85px] justify-center sm:w-[140px] h-[36px] rounded-[2px] border border-[#E2E8F0] bg-[#FFFFFF] focus:outline-none"
          >
            <option value={10}>10 rows</option>
            <option value={9}>9 rows</option>
            <option value={7}>7 rows</option>
            <option value={6}>6 rows</option>
          </select>
        </div>
      </div>

      {selectedEvent ? (
        <EventPopup event={selectedEvent} onClose={handleClosePopup} />
      ) : (
        <div>No event selected</div>
      )}

      <div className="Menudiv flex w-[375px] h-[98px] justify-center items-center mb-3 text-[#64748B] sm:hidden">
        <div className="flex w-[350px] justify-between h-[64px] mr-3">
          <div className="mobilemenu flex flex-col  w-[62.5px] h-[64px] items-center">
           <div className="w-[24px] h-[24px] mt-2">
           <CiHome />
           </div>
            <p className="text-[#64748B]">Home</p>
          </div>

          <div className="mobilemenu flex flex-col w-[62.5px] h-[64px] items-center">
          <div className="w-[24px] h-[24px] mt-2">
            <LuCalendarDays />
            </div>
            <p className="text-[#64748B]">Events</p>
          </div>

          <div className="mobilemenu flex flex-col w-[62.5px] h-[64px] items-center">
          <div className="w-[24px] h-[24px] mt-2">
            <MdOutlineRecordVoiceOver />
            </div>
            <p className="text-[#64748B]">Speakers</p>
          </div>

          <div className="mobilemenu flex flex-col w-[62.5px] h-[64px] items-center">
          <div className="w-[24px] h-[24px] mt-2">
            <BiMessageSquareDetail />
            </div>
            <p className="text-[#64748B]">Reports</p>
          </div>

          <div className="mobilemenu flex flex-col w-[62.5px] h-[64px]  items-center ">
              <div className="w-[24px] h-[24px] mt-2">
            <CgProfile />
            </div>
            <p className="text-[#64748B]">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventhistory;

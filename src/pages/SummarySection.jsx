import React from "react";

const SummarySection = () => {
  const carddata = [
    {
      title: "Total Events",
      number: "100,000",
      icon: "imges/arrow-up-right.png",
      percentage: 50, // Dynamic percentage value
    },
    {
      title: "Active Speakers",
      number: "25",
      icon: "imges/arrow-down-right.png",
      percentage: 50, // Dynamic percentage value
    },
    {
      title: "Total Registrations",
      number: "300",
      icon: "imges/arrow-up-right.png",
      percentage: 50, // Dynamic percentage value
    },
    {
      title: "Total Revenue",
      number: "$500,000",
      icon: "imges/arrow-up-right.png",
      percentage: 50, // Dynamic percentage value
    },
  ];

  return (
    <div className="flex flex-col h-[420px]   sm:h-[88px] sm:mb-0 sm:mt-5 w-[375px] sm:flex-row sm:w-[1076px] sm:mx-auto">
      <div className="h-[420px] w-[375px] flex flex-col items-center gap-[16px] sm:mb-0  sm:mt-6 sm:h-[88px] sm:w-[1076px] sm:flex  sm:items-center sm:gap-[16px] sm:flex-row">
        {carddata.map((d, i) => {
          const isArrowUp = d.icon === "imges/arrow-up-right.png";
          return (
            <div
              key={i}
              className="summary w-[335px] h-[88px] flex flex-col sm:w-[260px] sm:h-[88px] border border-[#F2F2F7] rounded-[2px] items-center justify-center"
            >
              <div className="flex w-[228px]">
                <h1 className="text-[#64748B] font-[600] text-[16px]">{d.title}</h1>
                <img src="imges/information.png" alt="" className="pl-3" />
              </div>
              <div className="flex w-[228px] h-[32px] items-center gap-2">
                <p className="text-[#334155] font-[600] text-[20px]">{d.number}</p>
                <img src={d.icon} alt="" className="w-[16px] h-[16px]" />
                <span
                  className={`font-[600] text-[12px] ${isArrowUp ? 'text-[#10B981]' : 'text-[#F43F5E]'}`}
                >
                  {isArrowUp ? `+${d.percentage}%` : `-${d.percentage}%`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummarySection;

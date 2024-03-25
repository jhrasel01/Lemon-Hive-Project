"use client";

import { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="grid grid-cols-1 laptop:grid-cols-5 gap-10 mt-10">
      <div className="flex flex-col gap-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-2 ${
              activeTab === index
                ? "bg-primary-color rounded-md shadow-lg text-white"
                : " rounded-md border border-[#D9D9D9]"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="col-span-4 bg-custom-gray-color2 rounded-lg p-14">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;

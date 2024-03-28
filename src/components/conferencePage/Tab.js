"use client";

import { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";

const Tab = ({ tabs, onTabOrderChange }) => {
  const desktopTabsContainerRef = useRef(null);
  const mobileTabsContainerRef = useRef(null);

  useEffect(() => {
    if (desktopTabsContainerRef.current) {
      Sortable.create(desktopTabsContainerRef.current, {
        animation: 200,
        onEnd: (event) => {
          const { oldIndex, newIndex } = event;
          onTabOrderChange(oldIndex, newIndex);
        },
      });
    }

    if (mobileTabsContainerRef.current) {
      Sortable.create(mobileTabsContainerRef.current, {
        animation: 200,
        onEnd: (event) => {
          const { oldIndex, newIndex } = event;
          onTabOrderChange(oldIndex, newIndex);
        },
      });
    }
  }, [onTabOrderChange]);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden laptop:grid grid-cols-1 laptop:grid-cols-4 gap-10 mt-10">
        <div ref={desktopTabsContainerRef} className="flex flex-col gap-5">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`p-2 ${
                activeTab === index
                  ? "bg-primary-color rounded-md shadow-lg text-white"
                  : "rounded-md border border-[#D9D9D9]"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="col-span-3 bg-custom-gray-color2 rounded-lg p-14">
          {tabs[activeTab].content}
        </div>
      </div>

      {/* mobile */}
      <div className="laptop:hidden mt-10" ref={mobileTabsContainerRef}>
        {tabs.map((tab, index) => (
          <div key={index} className="mb-8">
            <div
              className={`p-2 w-full ${
                activeTab === index
                  ? "bg-primary-color rounded-md shadow-lg text-white"
                  : "rounded-md border border-[#D9D9D9]"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
            {activeTab === index && (
              <div className="bg-custom-gray-color2 rounded-lg p-5 mt-4">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;

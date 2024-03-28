import { useState } from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { H4 } from "../UI";
import Organizer from "./Organizer";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Sponsor from "./Sponsor";
import Tab from "./Tab";

const TabContent = ({ conference }) => {
  const [tabs, setTabs] = useState([
    {
      label: (
        <>
          <div className="flex items-center gap-6">
            <span className="bg-[#FFFCF6] text-primary-color text-2xl p-2.5 rounded-md">
              <LuArrowDownUp />
            </span>
            <H4 className="!font-bold" name="Organizer" />
          </div>
        </>
      ),
      content: <Organizer organizers={conference.organizers} />,
    },
    {
      label: (
        <div className="flex items-center gap-6">
          <span className="bg-[#FFFCF6] text-primary-color text-2xl p-2.5 rounded-md">
            <LuArrowDownUp />
          </span>
          <H4 className="!font-bold" name="Speakers" />
        </div>
      ),
      content: <Speakers speakers={conference.speakers} />,
    },
    {
      label: (
        <div className="flex items-center gap-6">
          <span className="bg-[#FFFCF6] text-primary-color text-2xl p-2.5 rounded-md">
            <LuArrowDownUp />
          </span>
          <H4 className="!font-bold" name="Schedule" />
        </div>
      ),
      content: <Schedule schedules={conference.schedules} />,
    },
    {
      label: (
        <div className="flex items-center gap-6">
          <span className="bg-[#FFFCF6] text-primary-color text-2xl p-2.5 rounded-md">
            <LuArrowDownUp />
          </span>
          <H4 className="!font-bold" name="Sponsors" />
        </div>
      ),
      content: <Sponsor sponsors={conference.sponsors} />,
    },
  ]);

  const handleTabOrderChange = (oldIndex, newIndex) => {
    const newTabs = [...tabs];
    const movedTab = newTabs.splice(oldIndex, 1)[0];
    newTabs.splice(newIndex, 0, movedTab);
    setTabs(newTabs);
  };

  return (
    <div className="">
      <Tab tabs={tabs} onTabOrderChange={handleTabOrderChange} />
    </div>
  );
};

export default TabContent;

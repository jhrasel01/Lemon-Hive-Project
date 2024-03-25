"use client";

import { CustomLink, H3, List, ListItem } from "@/components/UI";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MenuData } from "./data";

export default function SideMenu() {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {isToggle ? (
          <IoCloseCircleOutline className="text-2xl text-secondary-color" />
        ) : (
          <FaBars className="text-2xl text-secondary-color" />
        )}
      </div>

      {/* sidebar */}
      {isToggle && (
        <div className="w-52 border-l border-custom-gray-color3 shadow-lg absolute -left-1 laptop:right-0 laptop:left-auto top-0 bg-white h-screen">
          <H3
            name="Menu"
            className="text-center bg-secondary-color text-white p-2"
          />

          <List className="flex flex-col gap-4 p-2 pl-5 mt-5">
            {MenuData?.map((data, i) => (
              <ListItem key={i}>
                <CustomLink
                  href={data.url}
                  name={data.name}
                  className="text-base font-medium text-secondary-color hover:text-primary-color ease-in duration-100"
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </>
  );
}

import { LuArrowDownUp } from "react-icons/lu";
import { CustomLink, H4, H5, H6, List, ListItem } from "../UI";
import Tab from "./Tab";

// img
import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from "../../assets/images/img.png";

const tabs = [
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
    content: (
      <div className="laptop: flex flex-col gap-6">
        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="">
            <H4 name="Siddhartha" className="text-secondary-color !font-bold" />
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>

        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="">
            <H4 name="Siddhartha" className="text-secondary-color !font-bold" />
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>
      </div>
    ),
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
    content: (
      <div className="flex flex-col gap-6">
        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="w-[80%]">
            <div className="flex items-center justify-between">
              <H4
                name="Siddhartha"
                className="text-secondary-color !font-bold"
              />
              {/* social */}
              <div className=" flex items-center justify-center gap-3 text-custom-gray-color3  text-lg ease-in duration-200 ">
                <CustomLink
                  href=""
                  name={<FaTwitter />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaLinkedin />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaFacebook />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaDribbble />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
              </div>
            </div>
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>

        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="w-[80%]">
            <div className="flex items-center justify-between pr-5">
              <H4
                name="Siddhartha"
                className="text-secondary-color !font-bold"
              />
              {/* social */}
              <div className=" flex items-center justify-center gap-3 text-custom-gray-color3  text-lg ease-in duration-200 ">
                <CustomLink
                  href=""
                  name={<FaTwitter />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaLinkedin />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaFacebook />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
                <CustomLink
                  href=""
                  name={<FaDribbble />}
                  className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                />
              </div>
            </div>
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>
      </div>
    ),
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
    content: (
      <div className="flex flex-col gap-6">
        {/* item */}
        <div className="bg-white py-6 px-10 rounded-md shadow gap-10">
          {/* title */}
          <div className="w-full flex items-center justify-between pr-5">
            <H4
              name="February 11, 2014"
              className="text-secondary-color !font-bold"
            />
            <H6 name="Wednesday " className="mt-2 text-secondary-color" />
          </div>

          <List className="mt-5 flex flex-col gap-5">
            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>

            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>

            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>
          </List>
        </div>

        {/* item */}
        <div className="bg-white py-6 px-10 rounded-md shadow gap-10">
          {/* title */}
          <div className="w-full flex items-center justify-between pr-5">
            <H4
              name="February 11, 2014"
              className="text-secondary-color !font-bold"
            />
            <H6 name="Wednesday " className="mt-2 text-secondary-color" />
          </div>

          <List className="mt-5 flex flex-col gap-5">
            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>

            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>

            <ListItem>
              <H5
                name="Duration : 05:00-06:00"
                className="text-secondary-color"
              />
              <div className="flex items-center gap-3 pl-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                <H5 name="Registration" className="text-secondary-color" />
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    ),
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
    content: (
      <div className="flex flex-col gap-6">
        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="">
            <H4 name="Siddhartha" className="text-secondary-color !font-bold" />
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>

        {/* item */}
        <div className="bg-white p-4 rounded-md shadow flex items-center gap-10">
          {/* img */}
          <div className="">
            <Image alt={img} src={img} className="rounded" />
          </div>

          {/* text */}
          <div className="">
            <H4 name="Siddhartha" className="text-secondary-color !font-bold" />
            <H6
              name="Lorem ipsum dolor sit amet, con sec tetur ad."
              className="mt-2 text-custom-gray-color"
            />
          </div>
        </div>
      </div>
    ),
  },
];

export default function TabContentDesktop() {
  return (
    <>
      {/* tabs */}
      <div className="">
        <Tab tabs={tabs} />
      </div>
    </>
  );
}

import { LuArrowDownUp } from "react-icons/lu";
import { CustomLink, H4, H6 } from "../UI";
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

export default function TabContentMobile() {
  return (
    <>
      {/* tabs */}
      <div className="">
        <Tab tabs={tabs} />
      </div>
    </>
  );
}

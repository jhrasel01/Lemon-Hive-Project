import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CustomLink, H4, H6 } from "../UI";

export default function Speakers({ speakers }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {speakers?.map((speaker) => (
          <div
            key={speaker.name}
            className="bg-white p-4 rounded-md shadow flex items-center gap-3 tab:gap-10"
          >
            {/* img */}
            <div className="">
              <Image
                src={speaker.image.url}
                alt={speaker.name}
                className="rounded"
                width={100}
                height={100}
              />
            </div>

            {/* text */}
            <div className="w-[85%]">
              <div className="flex flex-col tab:flex-row tab:items-center justify-between">
                <H4
                  name={speaker.name}
                  className="text-secondary-color !font-bold"
                />
                {/* social */}
                <div className=" flex items-center mt-1 tab:mt-0 tab:justify-center gap-2 tab:gap-3 text-custom-gray-color3 text-base tab:text-lg ease-in duration-200 ">
                  {speaker.social.twitter && (
                    <CustomLink
                      href={speaker.social.twitter}
                      name={<FaTwitter />}
                      className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                    />
                  )}
                  {speaker.social.linkedin && (
                    <CustomLink
                      href={speaker.social.linkedin}
                      name={<FaLinkedin />}
                      className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                    />
                  )}
                  {speaker.social.facebook && (
                    <CustomLink
                      href={speaker.social.facebook}
                      name={<FaFacebook />}
                      className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                    />
                  )}
                  {speaker.social.dribble && (
                    <CustomLink
                      href={speaker.social.dribble}
                      name={<FaDribbble />}
                      className="scale-100 hover:scale-110 hover:text-custom-blue-color"
                    />
                  )}
                </div>
              </div>
              <H6
                name={speaker.about}
                className="mt-3 text-custom-gray-color"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

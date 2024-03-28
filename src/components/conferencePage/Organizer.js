import Image from "next/image";
import { H4, H6 } from "../UI";

export default function Organizer({ organizers }) {
  return (
    <>
      <div className="laptop: flex flex-col gap-6">
        {organizers?.map((organizer) => (
          <div
            key={organizer.name}
            className="bg-white p-4 rounded-md shadow flex items-center gap-3 tab:gap-10"
          >
            {/* img */}
            <div className="">
              <Image
                src={organizer.image.url}
                alt={organizer.name}
                width={150}
                height={150}
                className="rounded"
              />
            </div>

            {/* text */}
            <div className="w-[85%]">
              <H4
                name={organizer.name}
                className="text-secondary-color !font-bold"
              />
              <H6
                name={organizer.about}
                className="mt-1 laptop:mt-2 text-custom-gray-color"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

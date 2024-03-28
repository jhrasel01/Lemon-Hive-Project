import Image from "next/image";
import { H4, H6 } from "../UI";

export default function Sponsor({ sponsors }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {sponsors?.map((sponsor) => (
          <div
            key={sponsor.name}
            className="bg-white p-4 rounded-md shadow flex items-center gap-3 tab:gap-10"
          >
            {/* img */}
            <div className="">
              <Image
                src={sponsor.image.url}
                alt={sponsor.name}
                className="rounded"
                width={100}
                height={100}
              />
            </div>

            {/* text */}
            <div className="w-[85%]">
              <H4
                name={sponsor.name}
                className="text-secondary-color !font-bold"
              />
              <H6
                name={sponsor.about}
                className="mt-1 laptop:mt-2 text-custom-gray-color"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

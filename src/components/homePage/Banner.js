import Image from "next/image";

import { Container, CustomLink, H1, H4 } from "../UI";

// img import
import bannerBg from "../../assets/images/banners/banner-bg.svg";
import banner1 from "../../assets/images/banners/banner1.png";
import banner1Mob from "../../assets/images/banners/banner1Mob.png";
import banner2 from "../../assets/images/banners/banner2.png";
import banner2Mob from "../../assets/images/banners/banner2Mob.png";
import dashIcon from "../../assets/images/banners/dashIcon.png";
import headIcon from "../../assets/images/banners/headIcon.png";
import scrollDown from "../../assets/images/banners/scrollDown.png";
import upArrow from "../../assets/images/banners/upArrow.png";

export default function Banner() {
  return (
    <>
      <section className="relative overflow-x-hidden">
        {/* img */}
        <Image
          alt={bannerBg}
          src={bannerBg}
          className="w-full h-[1100px] tab:h-[700px] laptop:h-[1100px]"
        />

        {/* content */}
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <Container>
            <div className="grid grid-cols-1 tab:grid-cols-3 items-end gap-5 relative">
              {/* left */}
              <div className="tab:col-span-2">
                {/* heading */}
                <div className="relative z-10 pr-5 text-right">
                  <div className="relative inline-block z-10">
                    <H1
                      name="React"
                      className="text-secondary-color inline-block"
                    />
                    {/* head */}
                    <span className="absolute -top-14 -left-14">
                      <Image
                        alt={headIcon}
                        src={headIcon}
                        className="w-20 h-auto"
                      />
                    </span>
                  </div>
                  <H1
                    name="Conference"
                    className="text-secondary-color text-right"
                  />
                </div>

                {/* content */}
                <div className="mt-10 flex items-start">
                  {/* left */}
                  <div className="hidden tab:block w-[40%] laptop:w-[45%]">
                    <Image alt={banner1} src={banner1} />
                  </div>
                  {/* right */}
                  <div className="w-full text-center tab:text-left tab:w-[60%] laptop:w-[55%]">
                    <H4
                      name="Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum."
                      className="mb-5 tab:mb-10"
                    />

                    <CustomLink
                      href=""
                      className="text-base tab:text-lg text-secondary-color font-medium bg-primary-color hover:bg-yellow-500 py-4 px-10 laptop:px-20 rounded-full inline-flex items-center justify-center gap-2"
                    >
                      <span>Buy Tickets</span>
                      <Image alt={upArrow} src={upArrow} />
                    </CustomLink>

                    {/* scroll down */}
                    <div className="hidden tab:flex items-center justify-end pr-20 mt-20 animate-slide-down">
                      <Image alt={scrollDown} src={scrollDown} />
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="relative z-10">
                {/* for desktop */}
                <Image
                  alt={banner2}
                  src={banner2}
                  className="hidden tab:block"
                />
                {/* for mobile */}
                <Image
                  alt={banner2Mob}
                  src={banner2Mob}
                  className="block tab:hidden w-full"
                />
                {/* for mobile */}
                <Image
                  alt={banner1Mob}
                  src={banner1Mob}
                  className="block tab:hidden w-full"
                />
              </div>

              {/* dash */}
              <span className="absolute -top-5 -right-[50%] laptop:-right-[11%]">
                <Image
                  alt={dashIcon}
                  src={dashIcon}
                  className="tab:h-[600px] laptop:h-auto"
                />
              </span>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

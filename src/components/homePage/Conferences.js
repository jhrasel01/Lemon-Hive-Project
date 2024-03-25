import { Container, CustomLink, H2, H5, P } from "../UI";

import { BsFillLightningChargeFill } from "react-icons/bs";

// img
import Image from "next/image";
import circle from "../../assets/images/confidence/circle.png";

export default function Conferences() {
  return (
    <>
      <section className="mb-20">
        <Container>
          {/* content */}
          <div className="">
            <H2
              name="Conferences"
              className="text-secondary-color text-center"
            />

            {/* content desktop */}
            <div className="hidden tab:flex flex-col gap-3 laptop:w-[80%] m-auto mt-8 ">
              {/* item */}
              <div className="w-full flex items-start gap-x-6 laptop:gap-x-10 ">
                {/* left */}
                <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                  <CustomLink href="/conference">
                    <div className="flex items-start gap-4">
                      <Image alt={circle} src={circle} className="mt-1" />
                      <div className="">
                        <H5
                          name="Freezing Edge 2023"
                          className="text-secondary-color"
                        />
                        <P
                          name="The edge isn't bleeding, it's freezing!'"
                          className="text-custom-gray-color"
                        />
                      </div>
                    </div>
                  </CustomLink>
                </div>

                {/* middle */}
                <div className="10%">
                  <span className="w-12 h-12 rounded-full border border-primary-color bg-[#FFF9EB] text-primary-color text-2xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[100px] w-0.5 bg-primary-color m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="w-[45%] mt-3">
                  <P
                    name="02 September, 2023"
                    className="text-custom-gray-color"
                  />
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-x-6 laptop:gap-x-10">
                {/* left */}
                <div className="w-[45%] mt-3 text-right">
                  <P
                    name="02 September, 2023"
                    className="text-custom-gray-color"
                  />
                </div>

                {/* middle */}
                <div className="10%">
                  <span className="w-12 h-12 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-2xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[100px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                  <div className="flex items-start gap-4">
                    <Image alt={circle} src={circle} className="mt-1" />
                    <div className="">
                      <H5
                        name="Design systems for beginners"
                        className="text-secondary-color"
                      />
                      <P
                        name="The workshop will provide you with all the basics"
                        className="text-custom-gray-color"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-x-6 laptop:gap-x-10">
                {/* left */}

                <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                  <div className="flex items-start gap-4">
                    <Image alt={circle} src={circle} className="mt-1" />
                    <div className="">
                      <H5
                        name="Design systems for beginners"
                        className="text-secondary-color"
                      />
                      <P
                        name="The workshop will provide you with all the basics"
                        className="text-custom-gray-color"
                      />
                    </div>
                  </div>
                </div>

                {/* middle */}
                <div className="10%">
                  <span className="w-12 h-12 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-2xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[100px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="w-[45%] mt-3">
                  <P
                    name="02 September, 2023"
                    className="text-custom-gray-color"
                  />
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-x-6 laptop:gap-x-10">
                {/* left */}
                <div className="w-[45%] mt-3 text-right">
                  <P
                    name="02 September, 2023"
                    className="text-custom-gray-color"
                  />
                </div>

                {/* middle */}
                <div className="10%">
                  <span className="w-12 h-12 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-2xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[100px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                  <div className="flex items-start gap-4">
                    <Image alt={circle} src={circle} className="mt-1" />
                    <div className="">
                      <H5
                        name="Design systems for beginners"
                        className="text-secondary-color"
                      />
                      <P
                        name="The workshop will provide you with all the basics"
                        className="text-custom-gray-color"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-x-6 laptop:gap-x-10">
                {/* left */}

                <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                  <div className="flex items-start gap-4">
                    <Image alt={circle} src={circle} className="mt-1" />
                    <div className="">
                      <H5
                        name="Design systems for beginners"
                        className="text-secondary-color"
                      />
                      <P
                        name="The workshop will provide you with all the basics"
                        className="text-custom-gray-color"
                      />
                    </div>
                  </div>
                </div>

                {/* middle */}
                <div className="10%">
                  <span className="w-12 h-12 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-2xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                </div>

                {/* right */}
                <div className="w-[45%] mt-3">
                  <P
                    name="02 September, 2023"
                    className="text-custom-gray-color"
                  />
                </div>
              </div>
            </div>

            {/* content mobile */}
            <div className="flex tab:hidden flex-col gap-3 laptop:w-[80%] m-auto mt-8 ">
              {/* item */}
              <div className="w-full flex items-start gap-4">
                {/* left */}
                <div className="10%">
                  <span className="w-10 h-10 rounded-full border border-primary-color bg-[#FFF9EB] text-primary-color text-xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[130px] w-0.5 bg-primary-color m-auto mt-2"></span>
                </div>
                {/* right */}
                <div className="">
                  <CustomLink href="/conference">
                    <div className="mt-3">
                      <P
                        name="02 September, 2023"
                        className="text-custom-gray-color mb-3"
                      />
                    </div>
                    <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                      <div className="flex items-start gap-4">
                        <Image alt={circle} src={circle} className="mt-2" />
                        <div className="">
                          <H5
                            name="Freezing Edge 2023"
                            className="text-secondary-color"
                          />
                          <P
                            name="The edge isn't bleeding, it's freezing!'"
                            className="text-custom-gray-color"
                          />
                        </div>
                      </div>
                    </div>
                  </CustomLink>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-4">
                {/* left */}
                <div className="10%">
                  <span className="w-10 h-10 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[130px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="">
                  <div className="mt-3">
                    <P
                      name="02 September, 2023"
                      className="text-custom-gray-color mb-3"
                    />
                  </div>

                  <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                    <div className="flex items-start gap-4">
                      <Image alt={circle} src={circle} className="mt-1" />
                      <div className="">
                        <H5
                          name="Design systems for beginners"
                          className="text-secondary-color"
                        />
                        <P
                          name="The workshop will provide you with all the basics"
                          className="text-custom-gray-color"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-4">
                {/* left */}
                <div className="10%">
                  <span className="w-10 h-10 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[130px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="">
                  <div className="mt-3">
                    <P
                      name="02 September, 2023"
                      className="text-custom-gray-color mb-3"
                    />
                  </div>

                  <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                    <div className="flex items-start gap-4">
                      <Image alt={circle} src={circle} className="mt-1" />
                      <div className="">
                        <H5
                          name="Design systems for beginners"
                          className="text-secondary-color"
                        />
                        <P
                          name="The workshop will provide you with all the basics"
                          className="text-custom-gray-color"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-4">
                {/* left */}
                <div className="10%">
                  <span className="w-10 h-10 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                  <span className="block h-[130px] w-0.5 bg-custom-gray-color3 m-auto mt-2"></span>
                </div>

                {/* right */}
                <div className="">
                  <div className="mt-3">
                    <P
                      name="02 September, 2023"
                      className="text-custom-gray-color mb-3"
                    />
                  </div>

                  <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                    <div className="flex items-start gap-4">
                      <Image alt={circle} src={circle} className="mt-1" />
                      <div className="">
                        <H5
                          name="Design systems for beginners"
                          className="text-secondary-color"
                        />
                        <P
                          name="The workshop will provide you with all the basics"
                          className="text-custom-gray-color"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="w-full flex items-start gap-4">
                {/* left */}
                <div className="10%">
                  <span className="w-10 h-10 rounded-full border border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 text-xl flex items-center justify-center">
                    <BsFillLightningChargeFill />
                  </span>
                </div>

                {/* right */}
                <div className="">
                  <div className="mt-3">
                    <P
                      name="02 September, 2023"
                      className="text-custom-gray-color mb-3"
                    />
                  </div>

                  <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                    <div className="flex items-start gap-4">
                      <Image alt={circle} src={circle} className="mt-1" />
                      <div className="">
                        <H5
                          name="Design systems for beginners"
                          className="text-secondary-color"
                        />
                        <P
                          name="The workshop will provide you with all the basics"
                          className="text-custom-gray-color"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

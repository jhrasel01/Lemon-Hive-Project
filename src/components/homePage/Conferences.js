import { Container, CustomLink, H2, H5, P } from "../UI";

import { BsFillLightningChargeFill } from "react-icons/bs";

// img
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import circle from "../../assets/images/confidence/circle.png";

export default function Conferences() {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.react-finland.fi/graphql",
          {
            query: `
            {
              conferences {
                id
                name
                slogan
                startDate
                endDate
              }
            }
          `,
          }
        );

        const { data, errors } = response.data;

        if (errors) {
          setError(errors[0].message);
        } else {
          setConferences(data.conferences);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isConferenceUpcoming = (startDate) => {
    const currentDate = new Date();
    const conferenceDate = new Date(startDate);
    return currentDate < conferenceDate;
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="mb-20">
        <Container>
          {/* content */}

          {loading ? (
            <div className="h-40 flex items-center justify-center w-full">
              <FadeLoader color="#111D5E" />
            </div>
          ) : (
            <div className="">
              <H2
                name="Conferences"
                className="text-secondary-color text-center"
              />

              {/* content desktop */}
              <div className="hidden tab:flex flex-col gap-3 laptop:w-[80%] m-auto mt-8 ">
                {conferences.map((conference, index) => (
                  <div
                    key={conference.id}
                    className={`w-full flex items-start gap-x-6 laptop:gap-x-10 ${
                      index % 2 === 0 ? "even" : "odd"
                    }`}
                  >
                    {index % 2 === 0 ? (
                      // Even Item
                      <>
                        {/* left */}
                        <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                          <CustomLink href={`/conference/${conference.id}`}>
                            <div className="flex items-start gap-4">
                              <Image
                                alt={circle}
                                src={circle}
                                className="mt-1"
                              />
                              <div className="">
                                <H5
                                  name={conference.name}
                                  className="text-secondary-color"
                                />
                                <P
                                  name={conference.slogan}
                                  className="text-custom-gray-color"
                                />
                              </div>
                            </div>
                          </CustomLink>
                        </div>
                        {/* middle */}
                        <div className="10%">
                          <span
                            className={`w-12 h-12 rounded-full border text-2xl flex items-center justify-center ${
                              isConferenceUpcoming(conference.startDate)
                                ? " border-primary-color bg-[#FFF9EB] text-primary-color"
                                : " border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 "
                            }`}
                          >
                            <BsFillLightningChargeFill />
                          </span>
                          <span
                            className={`block h-[100px] w-0.5  m-auto mt-2 ${
                              isConferenceUpcoming(conference.startDate)
                                ? " bg-primary-color"
                                : "bg-custom-gray-color3 "
                            }`}
                          ></span>
                        </div>
                        {/* right */}
                        <div className="w-[45%] mt-3">
                          <P
                            name={`${conference.startDate} - ${conference.endDate}`}
                            className="text-custom-gray-color"
                          />
                        </div>
                      </>
                    ) : (
                      // Odd Item
                      <>
                        {/* left */}
                        <div className="w-[45%] mt-3 text-right">
                          <P
                            name={`${conference.startDate} - ${conference.endDate}`}
                            className="text-custom-gray-color"
                          />
                        </div>
                        {/* middle */}
                        <div className="10%">
                          <span
                            className={`w-12 h-12 rounded-full border text-2xl flex items-center justify-center ${
                              isConferenceUpcoming(conference.startDate)
                                ? " border-primary-color bg-[#FFF9EB] text-primary-color"
                                : " border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 "
                            }`}
                          >
                            <BsFillLightningChargeFill />
                          </span>
                          <span
                            className={`block h-[100px] w-0.5  m-auto mt-2 ${
                              isConferenceUpcoming(conference.startDate)
                                ? "bg-primary-color "
                                : " bg-custom-gray-color3 "
                            }`}
                          ></span>
                        </div>
                        {/* right */}
                        <div className="w-[45%] bg-custom-gray-color2 rounded-lg px-5 py-7 shadow-md border-t-4 border-custom-gray-color3">
                          <CustomLink href={`/conference/${conference.id}`}>
                            <div className="flex items-start gap-4">
                              <Image
                                alt={circle}
                                src={circle}
                                className="mt-1"
                              />
                              <div className="">
                                <H5
                                  name={conference.name}
                                  className="text-secondary-color"
                                />
                                <P
                                  name={conference.slogan}
                                  className="text-custom-gray-color"
                                />
                              </div>
                            </div>
                          </CustomLink>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* content mobile */}
              <div className="flex tab:hidden flex-col gap-3 laptop:w-[80%] m-auto mt-8 ">
                {conferences.map((conference) => (
                  <div
                    key={conference.id}
                    className="w-full flex items-start gap-x-6 laptop:gap-x-10"
                  >
                    {/* left */}
                    <div className="10%">
                      <span
                        className={`w-12 h-12 rounded-full border text-2xl flex items-center justify-center ${
                          isConferenceUpcoming(conference.startDate)
                            ? " border-primary-color bg-[#FFF9EB] text-primary-color"
                            : " border-custom-gray-color3 bg-custom-gray-color2 text-custom-gray-color3 "
                        }`}
                      >
                        <BsFillLightningChargeFill />
                      </span>
                      <span
                        className={`block h-[100px] w-0.5  m-auto mt-2 ${
                          isConferenceUpcoming(conference.startDate)
                            ? "bg-primary-color "
                            : " bg-custom-gray-color3 "
                        }`}
                      ></span>
                    </div>

                    {/* right */}
                    <div className="">
                      <CustomLink href={`/conference/${conference.id}`}>
                        <div className="mt-3">
                          <P
                            name={`${conference.startDate} - ${conference.endDate}`}
                            className="text-custom-gray-color mb-3"
                          />
                        </div>
                        <div className="bg-custom-gray-color2 rounded-lg px-3 py-5 shadow-md border-t-4 border-custom-gray-color3">
                          <div className="flex items-start gap-4">
                            <Image alt={circle} src={circle} className="mt-2" />
                            <div className="">
                              <H5
                                name={conference.name}
                                className="text-secondary-color"
                              />
                              <P
                                name={conference.slogan}
                                className="text-custom-gray-color"
                              />
                            </div>
                          </div>
                        </div>
                      </CustomLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

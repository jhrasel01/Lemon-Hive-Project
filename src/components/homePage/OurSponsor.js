import { Container, H2 } from "../UI";

// img
import Image from "next/image";
import bonzeSponsor from "../../assets/images/sponsor-icons/bonzeSponsor.png";
import goldSponsor from "../../assets/images/sponsor-icons/goldSponsor.png";
import silverSponsor from "../../assets/images/sponsor-icons/silverSponsor.png";
import sponsor1 from "../../assets/images/sponsor-icons/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor-icons/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor-icons/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor-icons/sponsor4.png";
import sponsor5 from "../../assets/images/sponsor-icons/sponsor5.png";
import sponsor6 from "../../assets/images/sponsor-icons/sponsor6.png";
import sponsor7 from "../../assets/images/sponsor-icons/sponsor7.png";
import sponsor8 from "../../assets/images/sponsor-icons/sponsor8.png";
import sponsor9 from "../../assets/images/sponsor-icons/sponsor9.png";

export default function OurSponsor() {
  return (
    <>
      <section className="bg-custom-gray-color2 py-14 laptop:py-24">
        <Container>
          {/* content */}
          <div className="">
            <H2
              name="Our Sponsor"
              className="text-center text-secondary-color"
            />

            {/* goldSponsor */}
            <div className="mt-8">
              <Image
                alt={goldSponsor}
                src={goldSponsor}
                className="m-auto h-4 w-auto"
              />

              {/* item */}
              <div className="flex items-center gap-10 justify-center mt-8">
                <Image
                  alt={sponsor1}
                  src={sponsor1}
                  className="h-7 laptop:h-14 w-auto"
                />
                <Image
                  alt={sponsor2}
                  src={sponsor2}
                  className="h-7 laptop:h-14 w-auto"
                />
              </div>
            </div>

            {/* silverSponsor */}
            <div className="mt-8">
              <Image
                alt={silverSponsor}
                src={silverSponsor}
                className="m-auto h-4 w-auto"
              />

              {/* item */}
              <div className="flex flex-wrap items-center gap-10 justify-center mt-8">
                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor3}
                    src={sponsor3}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>
                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor4}
                    src={sponsor4}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>

                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor5}
                    src={sponsor5}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>
              </div>
            </div>

            {/* bonzeSponsor */}
            <div className="mt-8">
              <Image
                alt={bonzeSponsor}
                src={bonzeSponsor}
                className="m-auto h-4 w-auto"
              />

              <div className="flex flex-wrap items-center gap-10 justify-center mt-8">
                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor6}
                    src={sponsor6}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>
                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor7}
                    src={sponsor7}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>

                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor8}
                    src={sponsor8}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>

                <div className="w-[40%] tab:w-auto">
                  <Image
                    alt={sponsor9}
                    src={sponsor9}
                    className="h-7 laptop:h-14 w-auto m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

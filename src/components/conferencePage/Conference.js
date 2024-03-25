import { LuArrowDownUp } from "react-icons/lu";
import { Container, CustomLink, H2, H4, H6, P } from "../UI";
import Tab from "./Tab";

// img
import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from "../../assets/images/img.png";
import TabContentDesktop from "./TabContentDesktop";

export default function Conference() {
  return (
    <>
      <section className="mt-40 my-20">
        <Container>
          {/* content */}
          <div className="">
            {/* heading */}
            <div className="">
              <H2 name="Conference info" className="text-secondary-color" />
              <P
                name="Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum."
                className="text-custom-gray-color mt-2"
              />
            </div>

            {/* tabs */}
            <TabContentDesktop />
          </div>
        </Container>
      </section>
    </>
  );
}

import { Container, CustomLink, P } from "@/components/UI";

// img
import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import whiteLogo from "../../../assets/images/whiteLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary-color py-10 laptop:py-16">
        <Container>
          {/* content */}
          <div className="">
            {/* logo */}
            <div className="">
              <CustomLink
                href="/"
                name={
                  <Image
                    alt={whiteLogo}
                    src={whiteLogo}
                    className="h-8 laptop:h-12 w-auto m-auto"
                  />
                }
              />
            </div>

            {/* Social Media */}
            <div className=" flex items-center justify-center gap-6 text-white mt-10 laptop:mt-14 text-3xl ease-in duration-200 ">
              <CustomLink
                href=""
                name={<FaTwitter />}
                className="scale-100 hover:scale-110 "
              />
              <CustomLink
                href=""
                name={<FaLinkedin />}
                className="scale-100 hover:scale-110 "
              />
              <CustomLink
                href=""
                name={<FaFacebook />}
                className="scale-100 hover:scale-110 "
              />
              <CustomLink
                href=""
                name={<FaDribbble />}
                className="scale-100 hover:scale-110 "
              />
            </div>
            <P
              name="© 2023 Lemonhive. All rights reserved."
              className="text-white text-center mt-5"
            />
          </div>
        </Container>
      </footer>
    </>
  );
}

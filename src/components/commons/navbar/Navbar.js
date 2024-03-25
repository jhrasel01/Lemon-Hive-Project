import { Container, CustomLink, List, ListItem } from "@/components/UI";

import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import { MenuData } from "./data";

import SideMenu from "./SideMenu";

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full py-5 laptop:py-10 z-20">
        <Container>
          {/* content */}
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="">
              <CustomLink href="/">
                <Image
                  alt={logo}
                  src={logo}
                  className="h-5 laptop:h-8 w-auto"
                />
              </CustomLink>
            </div>

            {/* menu */}
            <div className="hidden laptop:block">
              <List className="flex  items-center gap-20">
                {MenuData?.map((data, i) => (
                  <ListItem key={i}>
                    <CustomLink
                      href={data.url}
                      name={data.name}
                      className="text-lg font-medium text-secondary-color hover:text-primary-color ease-in duration-100"
                    />
                  </ListItem>
                ))}
              </List>
            </div>

            {/* bar */}
            <SideMenu />
          </div>
        </Container>
      </nav>
    </>
  );
}

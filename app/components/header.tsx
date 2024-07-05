"use client";
import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import MyComponent from "../components/downloadbutton"


const montserrat = Montserrat({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = (e: MouseEvent) => {
    if (
      sidebarRef.current &&
      !(sidebarRef.current as Node).contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById("itinerary-section");
    console.log("Itinerary section:", itinerarySection);
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Itinerary section not found");
    }
  };

  return (
    <div>
      <div className="bg-local static inset-0 z-[-1]">
        {/* <Image
      src="/posterlandscape.png"
      alt="Background Image"
      fill
      style={{ objectFit: "cover" }}
      className="hidden md:block"
    /> */}
        <div className={`relative ${montserrat.className}`} style={{ position: "sticky", top: 0, width: "100%", zIndex: 100, backgroundImage: "url('poster.png')", backgroundRepeat: "no-repeat" }}>

          <header
            className="relative text-black py-3 px-4 md:py-2 md:px-14 lg:px-24 flex justify-between items-center p-4 bg-footerpink bg-opacity-10"
          >
            <div className="flex items-start items-center gap-0.1">

              <NextLink href="/" passHref>
                <div className="relative h-[3rem] w-[10rem] md:h-[3.5rem] flex items-center justify-start" >
                  <Image
                    src="/jklu.png"
                    alt="JKLU"
                    width={265}
                    height={65}
                    className=" h-[3rem] w-[10rem] md:h-[4.5rem] md:w-[12.5rem] flex items-center justify-center object-contain"
                  />
                </div>
              </NextLink>
            </div>

            {/* Hamburger menu */}
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="navbar-burger flex flex-col items-center py-1.5 px-2"
              >
                <span className="block w-8 h-[0.15rem] bg-black rounded"></span>
                <span className="block w-8 h-[0.15rem] bg-black mt-[0.35rem] rounded"></span>
                <span className="block w-8 h-[0.15rem] bg-black mt-[0.35rem] rounded"></span>
              </button>
            </div>

            <nav className="hidden lg:flex space-x-[2rem] items-center ${menuOpen ? 'hidden' : 'block'}">
              <NextLink href="/" passHref>
                <span
                  className={`cursor-pointer text-[1.2rem] ${pathname === "/" ? "decoration-[#B22D4E] underline-offset-[1.7rem] decoration-2 text-footerpink text-[1.3rem] text-bold" : "decoration-[#000] underline-offset-[1.7rem] decoration-5 hover:text-white text-footerpink"}`}
                >
                  HOME
                </span>
              </NextLink>
              <NextLink href="/team" passHref>
                <span
                  className={`cursor-pointer text-[1.2rem] ${pathname === "/team" ? "decoration-[#B22D4E] underline-offset-[1.7rem] decoration-2 text-footerpink text-[1.3rem] text-bold" : "decoration-[#000] underline-offset-[1.7rem] decoration-2 hover:text-white text-footerpink"}`}
                >
                  TEAM
                </span>
              </NextLink>
              <div className="flex place-content-center rounded-full">
                <MyComponent downloadbutton='download' />
              </div>
            </nav>
          </header>


          {/* Sidebar - Mobile View */}
          {menuOpen && (
            <div
              ref={sidebarRef}
              className="lg:hidden fixed top-0 right-0 h-full w-1/2 bg-footerpink bg-opacity-100 p-4 shadow-md z-50 overflow-y-auto"
            >
              <div className="mt-[1.5rem] ml-[0.3rem]">
                <NextLink href="/" passHref>
                  <span
                    className={`cursor-pointer text-1.5rem text-white block mb-4`}
                  >
                    HOME
                  </span>
                </NextLink>
                <NextLink href="/team" passHref>
                  <span
                    className={`cursor-pointer text-1.5rem text-white block mb-4`}
                  >
                    TEAM
                  </span>
                </NextLink>
                <div className="flex mt-[4rem] place-content-center p-[0.1rem] bg-white shadow-white-300 rounded-full">
                  <MyComponent downloadbutton='download' />
                </div>

              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default Header;
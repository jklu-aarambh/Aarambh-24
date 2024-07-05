"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import MyComponent from "../components/downloadbutton";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => document.removeEventListener("click", closeSidebar);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`sticky md:fixed top-0 left-0 right-0 z-50 ${montserrat.className}`}>
      <header className="bg-[#EBC1CA] bg-opacity-30 backdrop-blur-sm py-2 px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image src="/jklu.png" alt="JKLU" width={75} height={20} className="object-contain" />
            </Link>
            <Link href="https://jklu.edu.in/" className="flex items-center">
              <Image src="/mentoring-dreams.png" alt="Mentoring-Dreams" width={135} height={30} className="object-contain" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/" text="HOME" active={pathname === "/"} />
            <NavLink href="/team" text="TEAM" active={pathname === "/team"} />
            <MyComponent downloadbutton='download' />
          </nav>

          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div ref={sidebarRef} className="lg:hidden fixed top-0 right-0 h-full w-64 bg-footerpink p-6 shadow-lg z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <CloseIcon />
          </button>
          <nav className="flex flex-col space-y-6 mt-16">
            <NavLink href="/" text="HOME" active={pathname === "/"} mobile />
            <NavLink href="/team" text="TEAM" active={pathname === "/team"} mobile />
            <div className="mt-6 border-white">
              <MyComponent downloadbutton='download' />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
  active: boolean;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, active, mobile }) => (
  <Link href={href} className={`
    ${mobile ? 'text-white text-xl' : 'text-footerpink text-lg'}
    ${active ? 'font-bold underline decoration-2 underline-offset-8' : 'hover:text-white'}
    transition duration-200
  `}>
    {text}
  </Link>
);

const HamburgerIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Header;
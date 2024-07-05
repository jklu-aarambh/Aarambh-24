import React from 'react';
import {
  FaInstagramSquare,
  FaLinkedinIn,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBC1CA] bg-opacity-50 text-black py-10">
      <div className="container mx-auto px-4 md:px-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2" />
                <span className="text-black">7073699800, 9828067878</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2" />
                <Link href="mailto:studentaffairs@jklu.edu.in" className="text-black hover:underline">
                  studentaffairs@jklu.edu.in

          <div className="w-full md:w-2.8/10">
            <h2 className="text-4xl font-bold mb-4 sm:mx-10">Contact Us</h2>
            <ul className="list-none">
              <li className="flex items-center mb-5 sm:mx-10">
                <span>
                  <Link href="/">
                    <FaPhone className="h-6 w-6 mr-2" />
                  </Link>
                </span>
                <span className="text-black sm:text-lg">7073699800, 9828067878</span>
              </li>
              <li className="flex items-center mb-5 sm:mx-10">
                <span>
                  <Link href="mailto:studentaffairs@jklu.edu.in">
                    <FaEnvelope className="h-6 w-6 mr-2" />
                  </Link>
                </span>
                <Link href="mailto:studentaffairs@jklu.edu.in">
                  <span className="text-black sm:text-lg">studentaffairs@jklu.edu.in</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Social Media Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Address</h2>
            <div className="flex items-start mb-4">
              <MapPinIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
              <span className="text-black">JK Lakshmipat University, Mahapura Rd, near Mahindra SEZ, Mahapura, Rajasthan 302026</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://www.instagram.com/jklu_jaipur" icon={<FaInstagramSquare className="h-6 w-6" />} />
              <SocialLink href="https://in.linkedin.com/school/jk-lakshmipat-university-jaipur/" icon={<FaLinkedinIn className="h-6 w-6" />} />
              <SocialLink href="https://www.jklu.edu.in/" icon={<FaGlobe className="h-6 w-6" />} />
            </div>
          {/* Address and social media icons Section */}
          <div className="w-full md:w-2.8/10 my-6 md:my-0 items-end">
            <h2 className="text-4xl font-bold mb-4 md:text-left">Address</h2>
            <ul className="list-none flex-wrap">
              <li className="flex items-start mb-5">
                <span>
                  <Link href="https://www.jklu.edu.in/">
                    <MapPinIcon className="h-6 w-6 mr-2" />
                  </Link>
                </span>
                <span className="text-black sm:text-lg">JK Lakshmipat University, Mahapura Rd, near Mahindra SEZ, Mahapura, Rajasthan 302026</span>
              </li>
            </ul>
            <ul className="flex justify-center gap-6 md:gap-1 my-8">
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://www.instagram.com/jklu_jaipur" target='_blank'>
                <FaInstagramSquare className="h-6 w-6 mr-1" />
                </Link>
              </li>
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://in.linkedin.com/school/jk-lakshmipat-university-jaipur/" target='_blank'>
                  <FaLinkedinIn className="h-6 w-6 mr-1" />
                </Link>
              </li>
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://www.jklu.edu.in/" target='_blank'>
                  <FaGlobe className="h-6 w-6 mr-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            />
          </div>
        </div>


        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <Logo src="/jklu.png" alt="JKLU Logo" />
          <Logo src="/mentoring-dreams.png" alt="Mentoring Dreams Logo" />
          <div className="text-center mt-4 md:mt-0">

        <div className="flex flex-col md:flex-row justify-around items-center mt-8">
          <NextLink href="https://jklu.edu.in/" passHref>
            <div className="relative h-[rem] md:w-[18rem] md:h-[3rem] md:h-[3.5rem] object-center justify-center" >
              <Image
                src="/jklu.png"
                alt="Logo"
                width={260}
                height={65}
                className=" h-[4rem] w-[15rem] md:h-[3.5rem] md:w-[18.5rem] flex items-center justify-center object-contain"
              />
            </div>
          </NextLink>
          <div className="w-full md:w-1/3 mt-6 md:mt-0 text-center">

            <p className="text-sm">©2024 JK Lakshmipat University. All rights reserved.</p>
            <div className="mt-2">
              <CreditLink href="https://www.linkedin.com/in/rupakshi-sharma-interaction-designer/" text="Design by Rupakshi Sharma" />
              <span className="text-xs"> & </span>
              <CreditLink href="https://github.com/ShubhamJain-23" text="Developed by Shubham Jain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
    {icon}
  </Link>
);

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <div className="relative w-48 h-16">
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
);

interface CreditLinkProps {
  href: string;
  text: string;
}

const CreditLink: React.FC<CreditLinkProps> = ({ href, text }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">
    {text}
  </Link>
);

export default Footer;
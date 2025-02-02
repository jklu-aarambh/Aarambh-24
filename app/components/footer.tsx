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
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Us Section */}
          <div className='flex flex-col my-[2rem]' >
            <div className='mb-[2rem]'>
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
                  </Link>
                </li>
                <div className="flex space-x-4 mt-4">
                  <SocialLink href="https://www.instagram.com/jklu_jaipur" icon={<FaInstagramSquare className="h-6 w-6" />} />
                  <SocialLink href="https://in.linkedin.com/school/jk-lakshmipat-university-jaipur/" icon={<FaLinkedinIn className="h-6 w-6" />} />
                  <SocialLink href="https://www.jklu.edu.in/" icon={<FaGlobe className="h-6 w-6" />} />
                </div>
              </ul>
            </div>

            {/* Address and Social Media Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Address</h2>
              <div className="flex items-start mb-4">
                <MapPinIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <span className="text-black">JK Lakshmipat University, Mahapura Rd, near Mahindra SEZ, Mahapura, Rajasthan 302026</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-50%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="relative w-full h-[15rem] md:h-[15rem] md:w-[25rem] lg:h-[25rem] lg:w-[50rem] rounded-md"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className='flex justify-center items-center'>
            <Image src="/jklu.png" alt="JKLU" width={112.5} height={30} className="object-contain" />
            <Logo src="/mentoring-dreams.png" alt="Mentoring Dreams Logo" />
          </div>
          <div className="text-center mt-4 md:mt-0">
            <p className="text-sm">©2024 JK Lakshmipat University. All rights reserved.</p>
            <div className="mt-2">
              <CreditLink href="https://www.linkedin.com/in/rupakshi-sharma-interaction-designer/" text="Design by Rupakshi Sharma" />
              <span className="text-xs"> & </span>
              <CreditLink href="https://github.com/ShubhamJain-23" text="Developed by Shubham Jain" />
              <span className="text-xs"> , Special Support by </span>
              <CreditLink href="https://adistrim.me" text="adistrim" />
              <span className="text-xs"> and </span>
              <CreditLink href="https://in.linkedin.com/in/sujal50" text=" Sujal" />
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
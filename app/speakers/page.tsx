import dataTeam from "../data/dataTeam.json";
import dataOC from "../data/dataOC.json";
import dataSpeakers from "../data/speakers.json";
import Image from "next/image";
import Link from 'next/link';
import { Inter, Montserrat } from "next/font/google";
import {
  FaLinkedin,
  FaEnvelope,
  FaLinkedinIn,
  FaPhone
} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
    {icon}
  </Link>
);

const Team: React.FC = () => {
  const importedDataSpeakers = dataSpeakers;

  return (
    <div className="">
      <div
        className={`mx-[1rem] md:mx-[5rem] lg:mx-[5rem] mt-8 md:mt-8 mb-[5rem] md:mb-[10rem] ${montserrat.className}`}
      >

        {/* Speakers List */}
        <section className="flex flex-col justify-center mb-1 md:mb-16">
          <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold text-center my-[2rem] md:my-[3rem] text-[#f58b40]">
            <span
              className="text-black bg-clip-text"
            >
              SPEAKERS / FACILITATORS
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[1rem] mx-[1rem] md:mx-[1rem]">
            {importedDataSpeakers.map((member) => (
              <div key={member.name} className="relative text-white">
              <div className="absolute inset-0.5 md:-inset-0.5"></div>
              <div className="relative flex flex-row md:flex-col align-center items-center justify-center p-4 md:p-2">
                <div className="w-1/2 md:mb-4 relative h-[8rem] md:h-[14rem] md:w-[14rem] overflow-hidden rounded-full shadow-lg md:mx-auto">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className=""
                  />
                </div>
                <div className="flex-grow"></div>
                <div className="w-1/2 md:w-full m-2">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-black text-center text-lg md:text-xl mb-2">
                      {member.name}
                    </p>
                    <Link href={member.linkedin}>
                    <FaLinkedin className="h-6 w-6 md:h-8 md:w-8 bg-black  mr-2 p-1 rounded-lg" />
                    </Link>                      
                    <p className="flex justify-center text-center text-black md:pt-2">
                      {member.event}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
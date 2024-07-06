import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Montserrat } from "next/font/google";

import TeamMemberCard from "../components/TeamMemberCard";
import SectionTitle from "../components/SectionTitle";
import dataTeam from "../data/dataTeam.json";
import dataOC from "../data/dataOC.json";
import dataOSA from "../data/dataOSA.json";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const Team: React.FC = () => {
  return (
    <div className={`bg-gray-100 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-16">
        
        {/* OFFICE OF STUDENT AFFAIRS */}
        <section className="md:my-28">
          <SectionTitle title="OFFICE OF STUDENT AFFAIRS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataOSA.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* ORGANISING COMMITTEE */}
        <section className="my-32">
          <SectionTitle title="ORGANISING COMMITTEE" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataOC.map((member) => (
              <TeamMemberCard key={member.name} member={member} showContact={true} />
            ))}
          </div>
        </section>

        {/* COORDINATORS */}
        <section>
          <SectionTitle title="COORDINATORS" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {dataTeam.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 md:h-40 md:w-40 mb-4">
                  <Image
                    src={member.photo}
                    alt={`Photo of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.committee}</p>
                <Link href={member.linkedin}>
                  <p aria-label={`LinkedIn profile of ${member.name}`} className="text-blue-600 hover:underline text-sm">
                    LinkedIn
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;

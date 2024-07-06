import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

interface TeamMember {
  name: string;
  photo: string;
  committee?: string;
  email: string;
  linkedin: string;
  contact?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  showContact?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, showContact = false }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="relative h-64 w-full">
      <Image
        src={member.photo}
        alt={`Photo of ${member.name}`}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{member.name}</h3>
      <p className="text-gray-600 mb-2">{member.committee}</p>
      <div className="flex items-start space-x-4">
        <Link href={`mailto:${member.email}`}>
          <p aria-label={`Email ${member.name}`} className="text-gray-600 hover:text-gray-800">
            <FaEnvelope className="h-6 w-6" />
          </p>
        </Link>
        <Link href={member.linkedin}>
          <p aria-label={`LinkedIn profile of ${member.name}`} className="text-gray-600 hover:text-gray-800">
            <FaLinkedin className="h-6 w-6" />
          </p>
        </Link>
        {showContact && member.contact && (
          <div className="flex items-center">
            <FaPhone className="h-5 w-5 mr-2 text-gray-600" />
            <span className="text-sm">{member.contact}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default TeamMemberCard;

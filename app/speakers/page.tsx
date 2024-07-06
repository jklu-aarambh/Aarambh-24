"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { FaTimes } from 'react-icons/fa';
import dataSpeakers from "../data/speakers.json";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface Speaker {
  name: string;
  event: string;
  description: string;
  photo: string;
  linkedin: string;
}

const SocialLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
    {text}
  </Link>
);

const SpeakerModal: React.FC<{ speaker: Speaker; onClose: () => void }> = ({ speaker, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <FaTimes className="h-6 w-6" />
      </button>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative h-48 w-48 flex-shrink-0">
          <Image
            src={speaker.photo}
            alt={`Photo of ${speaker.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
          <p className="text-gray-600 mb-3">{speaker.event}</p>
          <p className="text-gray-700 mb-4">{speaker.description}</p>
          {speaker.linkedin && (
            <SocialLink href={speaker.linkedin} text="LinkedIn" />
          )}
        </div>
      </div>
    </div>
  </div>
);

const SpeakerCard: React.FC<{ speaker: Speaker; onClick: () => void }> = ({ speaker, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl p-6 cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-48 w-48 mx-auto mb-6 overflow-hidden rounded-full shadow-md">
      <Image
        src={speaker.photo}
        alt={`Photo of ${speaker.name}`}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        priority
      />
    </div>
    <div className="text-center">
      <h3 className="font-bold text-xl mb-2">{speaker.name}</h3>
      <p className="text-gray-600 mb-3">{speaker.event}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <div className={`bg-gray-50 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Speakers & Facilitators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet our esteemed speakers and facilitators who are experts in their fields. <span className=" underline " >Click on a speaker to learn more.</span> </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dataSpeakers.map((speaker: Speaker) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              onClick={() => setSelectedSpeaker(speaker)}
            />
          ))}
        </section>
      </div>

      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </div>
  );
};

export default Team;
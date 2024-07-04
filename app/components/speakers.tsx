import React from 'react';
import Image, {StaticImageData} from 'next/image'; // Import Image from next/image
import keya from '../../public/speakers/keya.png';
import vibhor from '../../public/speakers/vibhor.png';
import vibhuti from '../../public/speakers/vibhuti.png';
import meenakshi from '../../public/speakers/meenakshi.png';
import kunal from '../../public/speakers/kunal.png';
import abhishek from '../../public/speakers/abhishek.png';
import kiran from '../../public/speakers/kiran.png';
import anjali from '../../public/speakers/anjali.png';
import daisy from '../../public/speakers/daisy.png';
import us from '../../public/speakers/us.png';

// Define a type for the Speaker object
interface Speaker {
  name: string;
  designation: string;
  image: StaticImageData;
}

// SpeakerCard component with props type annotation
const SpeakerCard: React.FC<Speaker> = ({ name, designation, image }) => {
  return (
    <div className="rounded-xl bg-white shadow-md p-4 text-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{designation}</p>
    </div>
  );
};

// Speakers component
const Speakers: React.FC = () => {
  // Array of speakers
  const speakers: Speaker[] = [
    {
      name: 'Keya Vaswani',
      designation: 'PRAVAH',
      image: keya,
    },
    {
      name: 'Vibhor Mathur',
      designation: 'Reel Making with AI',
      image: vibhor,
    },
    {
      name: 'Vibhuti Mehra',
      designation: 'The Art of Living',
      image: vibhuti,
    },
    {
      name: 'Meenakshi Singh',
      designation: 'Pride of City',
      image: meenakshi,
    },
    {
      name: 'Kunal Agrawal',
      designation: 'Pottery and Clay Workshop',
      image: kunal,
    },
    {
      name: 'Abhishek Arora',
      designation: 'Anger Management',
      image: abhishek,
    },
    {
      name: 'Kiran Chauhan',
      designation: 'Creative Writing',
      image: kiran,
    },
    {
      name: 'Anjali Suneja',
      designation: 'Social Media & POSH',
      image: anjali,
    },
    {
      name: 'Dr. Daisy Sharma',
      designation: 'Self Reflection',
      image: daisy,
    },
    {
      name: 'US Sharma',
      designation: 'Art & Craft',
      image: us,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-pink-500">आरम्भ 2021</span>
        <br />
        Guest Speakers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapping over the speakers array and rendering SpeakerCard */}
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            designation={speaker.designation}
            image={speaker.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;

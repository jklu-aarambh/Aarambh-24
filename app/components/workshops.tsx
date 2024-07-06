import React from 'react';
import { Montserrat } from "next/font/google";
import MyComponent from "../components/downloadbutton";
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface WorkshopItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ title, description, imageSrc, imageAlt, reverse = false }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}>
    <div className='w-full md:w-1/2'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={450}
        height={300}
        className='rounded-2xl w-full h-auto object-cover shadow-md'
      />
    </div>
    <div className='w-full md:w-1/2 text-center md:text-left'>
      <h2 className='font-bold text-2xl md:text-3xl mb-4'>{title}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  </div>
);

const Workshops: React.FC = () => {
  return (
    <div className={`${montserrat.className} py-16 px-4 md:px-12`}>
      <h1 className="font-bold text-center text-3xl md:text-4xl mb-8">WORKSHOPS</h1>
      <div className="max-w-5xl mx-auto text-center text-xl mb-12">
        <p className="mb-4">
          Welcome to Aarambh 2024, an 18-day program from July 8th to July 25th, 2024, designed for our new Batch of 2024 students.
        </p>
        <p className="mb-4">
          Aarambh 2024 is filled with learning, fun, and celebration. Expect inspiring talks, hands-on workshops, and engaging activities that will spark your creativity and expand your knowledge. Every day promises to be extraordinary, making Aarambh 2024 an unforgettable experience for everyone at JKLU.
        </p>
      </div>
      
      <div className="flex justify-center mb-16">
        <MyComponent downloadbutton='download' />
      </div>

      <div className="max-w-6xl mx-auto">
        <WorkshopItem 
          title="Ice Breaking"
          description="Join Manish Freeman for an unforgettable ice-breaking session! Break free from the norm, have fun, and create lasting memories. It's your chance to meet new people, share laughter, and step out of your comfort zone."
          imageSrc="/aarambh-pictures/aarambh-3.webp"
          imageAlt="Ice Breaking Session"
        />
        
        <WorkshopItem 
          title="Manzil Mystics"
          description="Experience India's First Mobile Music Classroom and Recording Studio at JK Lakshmipat University! Craft your own anthem, rock the Music Bus, jam with the Mystics, and star in a music video. Unleash your inner rockstar!"
          imageSrc="/aarambh-pictures/manzilmystics.webp"
          imageAlt="Manzil Mystics"
          reverse={true}
        />
        
        <WorkshopItem 
          title="Rang Mastaaney"
          description="For 13 years, Rang Mastaaney has been captivating audiences with their performances. With a repertoire of 65 plays, 250 stage productions, and 1000 street shows, they're the only theatre group in India to present 7 different plays in 4 consecutive days."
          imageSrc="/aarambh-pictures/rangmastaaney.webp"
          imageAlt="Rang Mastaaney"
        />
        
        <WorkshopItem 
          title="Pottery and Clay"
          description="Discover the joy of pottery! Learn various ceramic techniques from experienced instructors. It's not just an art form but also a relaxing activity that allows you to explore your creative side."
          imageSrc="/aarambh-pictures/potteryclay.webp"
          imageAlt="Pottery and Clay Workshop"
          reverse={true}
        />
        
        <WorkshopItem 
          title="Pravah"
          description="Join Pravah's 'Self to Society: Explorations & Awareness' workshop at J.K. Lakshmipat University. Embark on a journey of self-discovery, enhance your communication skills, and develop teamwork and empathy through engaging activities and discussions."
          imageSrc="/aarambh-pictures/pravah.webp"
          imageAlt="Pravah Workshop"
        />
      </div>
    </div>
  );
};

export default Workshops;
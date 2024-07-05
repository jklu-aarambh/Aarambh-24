import aarambhPics from "../data/aarambhpics.json";
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const aarambhpics = aarambhPics;

function AboutAarambh() {
  return (
    <div className="bg-[#FFF9F7] px-[1rem] md:px-[5rem] py-24">
      <h1 className="font-extrabold text-center text-3xl md:text-4xl lg:text-5xl mb-8">What is AARAMBH?</h1>
      <div className="max-w-4xl mx-auto text-center text-base md:text-lg lg:text-xl space-y-6">
        <p>
          AARAMBH 2024 is an exhilarating 18-day welcome program running from July 8th to July 25th. It's designed to ignite your passion for learning and creativity from day one at JKLU.
        </p>
        <p>
          Inspiring talks, hands-on workshops, and engaging activities led by industry experts and thought leaders. Each day brings new opportunities to explore, learn, and connect, setting the stage for an unforgettable academic journey.
        </p>
    <div className="flex flex-col">
      <h1 className="relative font-bold text-center text-4xl my-1 md:mt-12">What is AARAMBH?</h1>
      <div className="text-center text-[18px] md:text-[24px] md:mx-20">
        <p className="my-8"> Aarambh 2024, an 18-day welcome program from July 8th to July 25th 2024, is packed with fun, learning, and celebration. We’ll kick things off with an exciting opening event featuring inspiring leaders and teachers who will get you pumped up to learn and create amazing things. </p>
        <p className="my-8"> There will be fascinating talks from experts, hands-on workshops, and activities that will keep your mind buzzing with new ideas. Every day is set to be amazing, making Aarambh 2024 a blast that everyone at JKLU will be talking about for years to come. </p>

      </div>

      <div className='mt-12 mb-8'>
        {/* Mobile Carousel */}
        <div className='lg:hidden'>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {aarambhpics.map((member, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={member.image}
                      alt="aarambh-picture"
                      width={400}
                      height={300}
                      layout="responsive"
                      className='rounded-lg shadow-md'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className='hidden lg:grid grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {aarambhpics.map((member, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={member.image}
                alt="aarambh-picture"
                width={400}
                height={300}
                layout="responsive"
                className='object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Register Now */}
      <div className="text-center">
        <a
          href="https://jklu.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-footerpink text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Join AARAMBH 2024
        </a>
      </div> */}
      
      {/* Download Schedule */}
      <div className="flex place-content-center gap-2 pb-2">
        <button><a
          className="flex text-white px-4 py-2 bg-footerpink rounded-full gap-1"
          href="https://jklu.edu.in/" target="_blank">
          Register Now
        </a>
        </button>
        <button><a
          className="flex text-white px-4 py-2 bg-footerpink rounded-full gap-1"
          href="@/public/aarambh-team.xlsx" download>
          Download Team Details
        </a>
        </button>
      </div>
    </div>
  );
}

export default AboutAarambh;
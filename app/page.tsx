import Image from "next/image";
import { Montserrat } from "next/font/google";
import Aarambh from "./components/aboutaarambh"
import Workshops from "./components/workshops"
import Poster from "./components/poster"
import backgroundLandscape from "../public/banner.png"
import backgroundPortrait from "../public/posterportrait.png"
import speakers from "../public/speaker.png"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <main className={`min-w-screen items-center${montserrat.className}`}>
      {/* Hero Image */}
      <div className="relative">
        {/* Desktop Hero Image */}
        <div className="hidden md:block lg:block relative object-cover  inset-0 overflow-hidden  z-[-1] ">
          <Image
            src={backgroundLandscape}
            alt="Background Landscape"
            layout="cover"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
        {/* Mobile Hero Image */}
        <div className="block lg:hidden md:hidden">
          <Image
            src={backgroundPortrait}
            alt="Background Portrait"
            layout="responsive"
            width={360}
            height={640}
          />
        </div>
      </div>

      {/* Content */}
      <div className={`mx-[1rem] md:mx-[10rem] ${montserrat.className}`}>
        {/* About Aarambh */}
        <div className="pt-10 md:pt-0">
          <Aarambh />
        </div>

        {/* Workshops */}
        <div className="pt-[2rem] md:pt-0">
          <Workshops />
        </div>
      </div>

      {/* Speakers Image */}
      <div className="h-100vw w-100vw items-center">
        <Image
          src={speakers}
          alt="Speakers"
          layout="responsive"
          width={5000}
          height={5000}
          className=""
        />
      </div>
    </main>
  );
}

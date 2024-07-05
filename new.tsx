import Image from "next/image";
import { Montserrat } from "next/font/google";
import Aarambh from "./components/aboutaarambh"
import Workshops from "./components/workshops"
import Poster from "./components/poster"
import backgroundlandscape from "../public/2560x1440.png"
import backgroundportrait from "../public/2560x1440.png"
import speakers from "../public/speaker.png"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <main className={`min-w-screen items-center bg-backg ${montserrat.className}`}>

      <div className="">
        <Poster />
      </div>
      <div className={`mx-[1rem]  md:mx-[10rem] ${montserrat.className}`}>
        <div className="absolute w-100vw overflow-hidden object-cover inset-0 z-[-1]">
          <Image
            src="/banner.png"
            alt="Cover Picture"
            height={5000}
            width={5000}
            style={{ objectFit: "fill" }}
            className="hidden relative lg:block md:block"
          >
          </Image>
        </div>
        <div className="absolute inset-x-0 h-100vw w-100vw top-[4.5rem] z-[-1]">
          <Image
            src="/posterportrait.png"
            alt="Cover Picture"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="relative block lg:hidden md:hidden"
          />
        </div>

        {/* About Aarambh */}
        <div className="pt-10 md:pt-0">
          <Aarambh />
        </div>

        {/* Workshops */}
        <div className="pt-[2rem] md:pt-0">
          <Workshops />
        </div>

      </div>

      <div className="h-100vw w-100vw items-center">
        <Image
          src={speakers}
          alt="Speakers"
          height={5000}
          width={5000}
          className=""
        />
      </div>
    </main>
  );
}

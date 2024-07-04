import Image from "next/image";
import { Montserrat } from "next/font/google";
import Aarambh from "./components/aboutaarambh"
import Workshops from "./components/workshops"
import Speakers from "./components/speakers"
import Poster from "./components/poster"
import backgroundlandscape from "../public/2560x1440.png"
import backgroundportrait from "../public/2560x1440.png"

// import Gallery from "./components/gallery";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <main className={`min-h-screen items-center bg-backg ${montserrat.className}`}>
      <Poster/>
      <Image
        src={backgroundlandscape}
        alt="background image"
        fill
        className="hidden md:block lg:block bg-scroll w-full h-full bg-fixed z-[-5]"
      />
      <Image
        src={backgroundportrait}
        alt="background image"
        fill
        className="block md:hidden lg:hidden bg-scroll w-full h-full bg-fixed z-[-5]"
      />
      <div className={`mx-[1rem] md:mx-[10rem] ${montserrat.className}`}>

        <div className="absolute max-w-full overflow-hidden object-cover inset-0 z-[-1]">
          <Image
            src="/banner.png"
            alt="Cover Picture"
 fill
            style={{ objectFit: "fill" }}
            className="hidden relative lg:block md:block"
          >
          </Image>
        </div>
        <div className="absolute inset-x-0 top-[4.5rem] z-[-1]">
          <Image
            src="/bannerportrait.png"
            alt="Cover Picture"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="relative block lg:hidden md:hidden"
          >
          </Image>
        </div>
        {/* About Aarambh */}
        <Aarambh />

        {/* Workshops */}
        <Workshops />

        <Speakers />

      </div>

    </main>
  );
}

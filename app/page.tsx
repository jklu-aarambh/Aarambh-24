import Image from "next/image";
import { Montserrat } from "next/font/google";
import AboutAarambh from "./components/aboutaarambh";
import Workshops from "./components/workshops";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <div className="relative w-full h-[440px] md:h-screen">
          <Image
            src="/banner.webp"
            alt="Cover Picture"
            fill
            style={{ objectFit: "cover" }}
            className="hidden md:block"
          />
          <Image
            src="/bannerportrait.webp"
            alt="Cover Picture"
            fill
            style={{ objectFit: "cover" }}
            className="block md:hidden"
          />
        </div>
      <div className={`${montserrat.className}`}>
        <div className="md:pt-0 pb-2">
          <AboutAarambh />
        </div>
        <div className="pt-[2rem] mt-2 md:pt-0">
          <Workshops />
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aarambh",
  description:
    "",
  keywords:
    "Aarambh, Aarambh'24, Aarambh 2024, hackjklu, Aarambh JKLU 2024, orientation, orientation JKLU, orientation JK Lakshmipat University, orientation JKLU Jaipur, orientation JKLU Rajasthan, orientation JKLU India, JK Lakshmipat University, Jaipur, Rajasthan, India, hackathon, Jaipur hackathon, hackathon in march, hackathon in 2024, admission in JKLU, admission in JK Lakshmipat University, admission in JKLU Jaipur, admission in JKLU Rajasthan, admission in JKLU India, bachelor of design best college, bacheor of technology best college, best college jaipur",
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="jklu.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

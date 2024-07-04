import React from 'react'
import Image from "next/image";

function poster() {
    return (
        <div>
            <div className="absolute z-[-1]">
                <Image
                    src="/banner.png"
                    alt="Cover Picture"
                    fill
                    style={{ objectFit: "cover" }}
                    className="hidden lg:block md:block w-full h-screen bg-cover bg-scroll bg-no-repeat "
                >
                </Image>
            </div>
            <div className="relative inset-0 z-[-1]">
                <Image
                    src="/posterportrait.png"
                    alt="Cover Picture"
                    width={480}
                    height={480}
                    style={{ objectFit: "cover" }}
                    className="relative block lg:hidden md:hidden w-full h-full mb-10 bg-cover bg-scroll bg-no-repeat "
                >
                </Image>
            </div>
        </div>
    )
}

export default poster;
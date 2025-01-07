"use client"

import { AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import WLogo from "@/public/header/header-logo.webp"

const WSection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true
  })

  return (
    <section className="w-container mx-auto py-[3.125rem]">
      <h2 className="flex justify-center items-center font-newsReader text-center text-4xl mb-10 text-grayAccent">
        O JEITO
        <Image
          src={WLogo}
          alt="W"
          width={80}
          height={58}
          className="mx-4"
        />
        DE
        <Image
          src={WLogo}
          alt="M"
          width={80}
          height={58}
          className="ml-4 -mr-2 rotate-180"
        />ORAR
      </h2>
      <div ref={ref}>
        <AnimatePresence>
          {isInView &&
            <video
              className="w-full max-h-[45.625rem]"
              src="https://www.infocenterhost2.com.br/crm/videos/1506/icaro.mp4" loop controls playsInline></video>
          }
        </AnimatePresence>
      </div>
    </section>
  )
}

export default WSection
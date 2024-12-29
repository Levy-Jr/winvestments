"use client"

import { AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"

const PraySection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true
  })

  return (
    <section className="w-container mx-auto py-[3.125rem]">
      <h2 className="font-newsReader text-center text-4xl mb-10 text-grayAccent">O JEITO DE ORAR</h2>
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

export default PraySection
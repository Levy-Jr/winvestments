"use client"

import { SlideButton, useSlideButton } from "@/app/(home)/components/slide-button"
import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Foto } from "smart-imob-types"

const EstateImgCarousel = ({ fotos }: { fotos: Foto[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({})

  const { selectedIndex, scrollSnaps, onSlideButtonClick } = useSlideButton(emblaApi)

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <ul className="flex">
          {fotos.map((foto, index) => {
            if (index + 1 <= 5) {
              return <li
                key={index}
                className="flex-[0_0_100%] max-h-[500px]"
              >
                <Image
                  className="object-cover max-w-full max-h-full min-h-[31.25rem]"
                  width={850}
                  height={500}
                  src={foto.source.uri}
                  alt="Foto do imóvel"
                />
              </li>
            }
          })}
        </ul>
      </div>
      <ul className="flex gap-2 right-1/2 translate-x-1/2 absolute bottom-4">
        {scrollSnaps.map((_, index) => (
          <li
            key={index}
          >
            <SlideButton
              onClick={() => onSlideButtonClick(index)}
              className={cn("w-[3.125rem] sm:w-[4.375rem] bg-[#E9E4DE] opacity-70 hover:opacity-90 rounded-[.625rem] h-[.625rem]", index === selectedIndex ? "bg-[#2F4856]" : "")}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EstateImgCarousel
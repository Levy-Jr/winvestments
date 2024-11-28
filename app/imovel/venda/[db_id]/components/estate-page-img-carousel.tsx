"use client"

import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback } from "react"
import { Foto } from "smart-imob-types"
import GoldenArrowRight from "@/public/estates/golden-arrow-right.svg"

const EstatePageImgCarousel = ({ fotos }: { fotos: Foto[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  }, [Fade()])

  const scrollPrev = useCallback(() => {
    if (!emblaApi || !emblaApi.canScrollPrev()) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi || !emblaApi.canScrollNext()) return
    emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="min-h-[100svh] embla">
      <div className="embla__viewport overflow-hidden min-h-[100svh] absolute top-0 w-full" ref={emblaRef}>
        <ul className="embla__container flex">
          {fotos.map((foto, index) => (
            <li className="flex-[0_0_100%] min-h-[100svh]" key={index}>
              <button>
                <Image
                  loading="eager"
                  className="object-cover object-center w-full h-full"
                  src={foto.source.uri}
                  alt="Foto do imóvel"
                  fill
                />
                <p className="absolute bg-black/55 py-2 px-4 rounded-[100vmax] left-[.625rem] bottom-[.625rem] text-sm text-white">{index + 1} de {fotos.length} fotos</p>
                <p className="absolute bg-black/55 py-2 px-7 rounded-[100vmax] right-[.625rem] bottom-[.625rem] text-sm text-white">Tela cheia</p>
              </button>
            </li>
          ))}
        </ul>
        <button
          className="absolute rotate-180 z-10 left-[.625rem] bottom-1/2 translate-y-1/2"
          onClick={scrollPrev}
        >
          <Image
            src={GoldenArrowRight}
            alt="Seta para esquerda"
          />
        </button>
        <button
          className="absolute z-10 right-[.625rem] bottom-1/2 translate-y-1/2"
          onClick={scrollNext}
        >
          <Image
            src={GoldenArrowRight}
            alt="Seta para direita"
          />
        </button>
      </div>
    </div>
  )
}

export default EstatePageImgCarousel
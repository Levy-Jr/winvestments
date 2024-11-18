"use client"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Foto } from "smart-imob-types"
import AutoHeight from "embla-carousel-auto-height"

const EstateImgCarousel = ({ fotos }: { fotos: Foto[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [AutoHeight()])

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <ul className="flex items-start [transition:height_0.1s]">
          {fotos.map((foto, index) => (
            <li
              key={index}
              className="flex-[0_0_100%]"
            >
              <Image
                width={700}
                height={700}
                src={foto.source.uri}
                alt="Foto do imóvel"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EstateImgCarousel
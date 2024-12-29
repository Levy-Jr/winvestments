"use client"

import useEmblaCarousel from "embla-carousel-react"
import { Imóvel } from "smart-imob-types"
import ConsultantEstate from "./consultant-carousel-item"

const ConsultantCarousel = ({ estates }: { estates: Imóvel[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <div className="embla w-lg-container mx-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <ul className="embla__container flex -ml-2">
          {estates.map(estate => (
            <ConsultantEstate
              key={estate.db_id}
              imovel={estate}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ConsultantCarousel
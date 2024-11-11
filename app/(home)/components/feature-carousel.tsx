"use client"

import useEmblaCarousel from "embla-carousel-react"
import { SlideButton, useSlideButton } from "./slide-button";
import { cn } from "@/lib/utils";

type FeatureCarouselProps = {
  features: {
    href: string;
    bgImg: string;
  }[]
}

const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    duration: 20
  })

  const { selectedIndex, scrollSnaps, onSlideButtonClick } = useSlideButton(emblaApi)

  return (
    <div className="embla mt-8 mx-8">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <ul className="embla__container flex">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex-[0_0_100%] bg-cover bg-center w-full h-[80vh] md:h-[60vh] max-h-[43.75rem]"
              style={{
                backgroundImage: `url(${feature.bgImg})`
              }}
            >
              <a
                href={feature.href}
                className="inline-block absolute bottom-5 right-5 py-[.875rem] px-[5.25rem] bg-white/80 text-[#666] rounded-[100vmax]"
              >
                CONHEÇA
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex justify-center gap-4 mt-4">
        {scrollSnaps.map((_, index) => (
          <li
            key={index}
          >
            <SlideButton
              onClick={() => onSlideButtonClick(index)}
              className={cn("w-[4.375rem] bg-[#E9E4DE] opacity-70 hover:opacity-90 rounded-[.625rem] h-[.625rem]", index === selectedIndex ? "bg-[#2F4856]" : "")}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureCarousel
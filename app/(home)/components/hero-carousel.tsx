"use client"

import useEmblaCarousel from "embla-carousel-react"
import { SlideButton, useSlideButton } from "./slide-button";
import Fade from "embla-carousel-fade"
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

type HeroCarouselProps = {
  banners: {
    href: string;
    bgImg: string;
  }[]
}

const HeroCarousel = ({ banners }: HeroCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  }, [Autoplay({
    stopOnInteraction: false,
    delay: 8000
  }), Fade()])

  const { selectedIndex, scrollSnaps, onSlideButtonClick } = useSlideButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden min-h-[100svh] absolute top-0 w-full" ref={emblaRef}>
        <ul className="embla__container flex">
          {banners.map((banner, index) => (
            <li className="flex-[0_0_100%] min-h-[100svh]" key={index}>
              <a className="block bg-center bg-cover h-full"
                style={{
                  backgroundImage: `url(${banner.bgImg})`
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={banner.href}
              >
                <button className="bg-white/80 absolute bottom-[3.375rem] right-12 text-[#666] py-[.875rem] px-[5.25rem] rounded-[100vmax]">CONHEÇA</button>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mx-4 flex items-center justify-center flex-wrap gap-x-4 gap-y-2 absolute bottom-4 z-20">
          {scrollSnaps.map((_, index) => (
            <li className="w-[6.25rem] h-3" key={index}>
              <SlideButton
                onClick={() => onSlideButtonClick(index)}
                className={cn("w-full h-full bg-white/80 rounded-[.625rem]", index == selectedIndex ? "bg-[#2F4856]" : "")}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeroCarousel
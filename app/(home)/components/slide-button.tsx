"use client"

import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react"
import { EmblaCarouselType } from "embla-carousel"

type UseSlideButtonProps = {
  emblaApi: EmblaCarouselType | undefined;
  onButtonClick?: (emblaApi: EmblaCarouselType) => void;
}

type UseSlideButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onSlideButtonClick: (index: number) => void;
}

export const useSlideButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseSlideButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSlideButtonClick = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onSlideButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const SlideButton = (props: PropType) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
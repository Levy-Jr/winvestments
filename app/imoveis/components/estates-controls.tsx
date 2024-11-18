"use client"

import GridIcon from "@/public/estates/grid.svg"
import RowsIcon from "@/public/estates/rows.svg"
import MarkMap from "@/public/estates/map-mark.svg"
import GrayArrowDown from "@/public/estates/gray-arrow-down.svg"
import Image from "next/image";

const EstatesControls = () => {
  return (
    <div className="flex justify-between">
      <button className="px-[.625rem] rounded-[.9375rem] w-[min(12.5rem,100%)] text-start bg-white text-sm">
        <span className="pl-[.9375rem] w-full inline-flex items-center justify-between">
          ORDENAR POR
          <Image
            className="w-[.75rem]"
            src={GrayArrowDown}
            alt="Expand Icon"
          />
        </span>
      </button>
      <div className="flex items-center gap-5 text-[.75rem]">
        <p>VISUALIZAR COMO</p>
        <button className="w-[2.813rem] h-[2.188rem]">
          <Image
            className="w-full"
            src={GridIcon}
            alt="grid"
          />
        </button>
        <button className="w-[2.813rem] h-[2.188rem]">
          <Image
            className="w-full"
            src={RowsIcon}
            alt="linhas"
          />
        </button>
        <button className="w-[1.688rem] h-[2.188rem]">
          <Image
            src={MarkMap}
            alt="ver no mapa"
          />
        </button>
      </div>
    </div>
  )
}

export default EstatesControls
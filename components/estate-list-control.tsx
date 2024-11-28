"use client"

import GridIcon from "@/public/estates/grid.svg"
import RowsIcon from "@/public/estates/rows.svg"
import MarkMap from "@/public/estates/map-mark.svg"
import GrayArrowDown from "@/public/estates/gray-arrow-down.svg"
import Image from "next/image";
import { cn } from "@/lib/utils"
import { ActiveButtonType } from "./estate-list"

type EstateListControlProps = {
  activeButton: ActiveButtonType
  activeOrderButton: boolean;
  handleButtonClick: (button: ActiveButtonType) => void;
  orderBtnToggle: () => void;
}

const EstateListControl = ({ activeButton, activeOrderButton, handleButtonClick, orderBtnToggle }: EstateListControlProps) => {
  const orderList = ["Menor Valor", "Maior Valor", "Menor Área", "Maior Área", "Recentes"]

  return (
    <div className="flex justify-between">
      <button className="relative px-[.625rem] rounded-[.9375rem] w-[min(12.5rem,100%)] text-start bg-white text-sm">
        <span
          onClick={orderBtnToggle}
          className="pl-[.9375rem] w-full inline-flex items-center justify-between">
          ORDENAR POR
          <Image
            className="w-[.75rem]"
            src={GrayArrowDown}
            alt="Expand Icon"
          />
        </span>
        {activeOrderButton ? (
          <ul
            className="pt-2 grid bg-white absolute z-20 w-full px-[.9375rem] rounded-b-[.9375rem] left-0"
          >
            {orderList.map((i, index) => (
              <li
                key={index}
                className="pl-[1.875rem] last:pb-2 first:pt-2 py-1 hover:bg-[#efefef]"
              >{i}</li>
            ))}
          </ul>
        ) : null}
      </button>

      <div className="hidden md:flex items-center gap-5 text-[.75rem]">
        <p>VISUALIZAR COMO</p>
        <button
          onClick={() => handleButtonClick("grid")}
          className={cn("w-[2.813rem] h-[2.188rem]", activeButton === "grid" ? "opacity-100" : "opacity-25 hover:opacity-40")}
        >
          <Image
            className="w-full"
            src={GridIcon}
            alt="grid"
          />
        </button>
        <button
          onClick={() => handleButtonClick("rows")}
          className={cn("w-[2.813rem] h-[2.188rem]", activeButton === "rows" ? "opacity-100" : "opacity-25 hover:opacity-40")}
        >
          <Image
            className="w-full"
            src={RowsIcon}
            alt="linhas"
          />
        </button>
        <button
          onClick={() => handleButtonClick("map")}
          className={cn("w-[1.688rem] h-[2.188rem]", activeButton === "map" ? "opacity-100" : "opacity-25 hover:opacity-40")}
        >
          <Image
            src={MarkMap}
            alt="ver no mapa"
          />
        </button>
      </div>
    </div>
  )
}

export default EstateListControl
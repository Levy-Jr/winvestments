"use client"

import { Imóvel } from "smart-imob-types"
import EstateListControl from "./estate-list-control"
import Estate from "./estate-list-item"
import { useState } from "react"
import { cn } from "@/lib/utils"
import EstatesMap from "./estates-map"

export type ActiveButtonType = "grid" | "rows" | "map";

const EstateList = ({ imoveis }: { imoveis: Imóvel[] }) => {
  const [activeOrderButton, setActiveOrderButton] = useState(false)
  const [activeButton, setActiveButton] = useState<ActiveButtonType>("grid")

  const handleButtonClick = (button: ActiveButtonType) => setActiveButton(activeButton === button ? "grid" : button)
  const orderBtnToggle = () => setActiveOrderButton(!activeOrderButton)

  return (
    <>
      <EstateListControl
        activeButton={activeButton}
        activeOrderButton={activeOrderButton}
        handleButtonClick={handleButtonClick}
        orderBtnToggle={orderBtnToggle}
      />
      {activeButton === "map" ? (
        <EstatesMap imoveis={imoveis} />
      ) : (
        <ul className={cn("grid w-[min(100%,43.75rem)] mx-auto lg:w-auto lg:mx-0 center lg:grid-cols-2 gap-10",
          activeButton === "rows" ? "lg:grid-cols-1 w-auto" : null
        )}>
          {imoveis.map((imovel, index) => (
            <Estate
              activeButton={activeButton}
              key={index}
              imovel={imovel}
            />
          )
          )}
        </ul>
      )
      }
    </>
  )
}

export default EstateList
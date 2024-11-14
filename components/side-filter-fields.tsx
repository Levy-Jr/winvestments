"use client"

import Image from "next/image"
import GoldenArrowDown from "@/public/header/golden-arrow-down.svg"
import GoldenPlus from "@/public/header/golden-plus.svg"
import GoldenMinus from "@/public/header/golden-minus.svg"
import { FilterStates } from "./side-filter-menu"

type SideFiltersProps = {
  filterState: FilterStates;
  setFilterState: React.Dispatch<React.SetStateAction<FilterStates>>
}

const SideFilterFields = ({ filterState, setFilterState }: SideFiltersProps) => {

  return (
    <div className="my-[3.125rem]">
      <p className="font-newsReader text-grayAccent font-light text-center">BUSQUE O IMÓVEL QUE DESEJA</p>
      <div className="bg-white rounded-[.625rem] p-[.3125rem] mt-5 text-sm flex justify-between gap-2 *:flex-1 *:py-[.188rem] *:rounded-[.438rem]">
        <button className="bg-gradient-to-r from-darkBrown to-lightBrown text-white">COMPRAR</button>
        <button className="text-grayAccent hover:bg-gradient-to-r hover:from-darkBrown hover:to-lightBrown hover:text-white">ALUGAR</button>
      </div>
      <div className="text-[#7f7f7f] mt-[.9375rem] grid gap-[.9375rem] text-sm [&>button]:p-[.4375rem] [&>label]:p-[.4375rem] [&>button]:pl-[.9375rem] [&>label]:pl-[.9375rem] *:text-start *:relative [&_button]:bg-white [&_label]:bg-white *:rounded-[.625rem]">
        <button>TIPO DO IMÓVEL
          <Image
            className="absolute w-3 bottom-1/2 translate-y-1/2 right-[.9375rem]"
            src={GoldenArrowDown}
            alt="Seta de expansão"
          />
        </button>
        <button>CIDADE
          <Image
            className="absolute w-3 bottom-1/2 translate-y-1/2 right-[.9375rem]"
            src={GoldenArrowDown}
            alt="Seta de expansão"
          />
        </button>
        <button>BAIRROS
          <Image
            className="absolute w-3 bottom-1/2 translate-y-1/2 right-[.9375rem]"
            src={GoldenArrowDown}
            alt="Seta de expansão"
          />
        </button>

        {/* dormitory */}

        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">DORMITÓRIOS <span>{filterState.params.dormitory}</span></span>
          </div>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              dormitory: Number(prev.params.dormitory) > 0 ? Number(prev.params.dormitory) - 1 : 0
            }
          }))} className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              dormitory: Number(prev.params.dormitory) + 1
            }
          }))} className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
        </div>

        {/* suite */}

        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">SUÍTES <span>{filterState.params.suite}</span></span>
          </div>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              suite: Number(prev.params.suite) > 0 ? Number(prev.params.suite) - 1 : 0
            }
          }))} className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              suite: Number(prev.params.suite) + 1
            }
          }))} className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
        </div>

        {/* vacancies */}

        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">VAGAS DE GARAGEM <span>{filterState.params.vacancies}</span></span>
          </div>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              vacancies: Number(prev.params.vacancies) > 0 ? Number(prev.params.vacancies) - 1 : 0
            }
          }))} className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              vacancies: Number(prev.params.vacancies) + 1
            }
          }))} className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
        </div>

        {/* bathroom */}

        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">BANHEIROS <span>{filterState.params.bathroom}</span></span>
          </div>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              bathroom: Number(prev.params.bathroom) > 0 ? Number(prev.params.bathroom) - 1 : 0
            }
          }))} className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
          <button onClick={() => setFilterState(prev => ({
            ...prev,
            params: {
              ...prev.params,
              bathroom: Number(prev.params.bathroom) + 1
            }
          }))} className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
        </div>

        {/* min value */}

        <label className="flex justify-between">
          PREÇO MÍNIMO
          <input
            value={filterState.params.minValue === 0 ? "" : filterState.params.minValue}
            onChange={(e) =>
              setFilterState(prev => ({
                ...prev,
                params: {
                  ...prev.params,
                  minValue: e.target.value === "" ? "" : Number(e.target.value)
                }
              }))
            }
            type="number"
            className="max-w-[6.7rem] outline-0"
            min={0}
          />
        </label>

        {/* max value */}

        <label className="flex justify-between">
          PREÇO MÁXIMO
          <input
            value={filterState.params.maxValue === 0 ? "" : filterState.params.maxValue}
            onChange={(e) =>
              setFilterState(prev => ({
                ...prev,
                params: {
                  ...prev.params,
                  maxValue: e.target.value === "" ? "" : Number(e.target.value)
                }
              }))
            }
            type="number"
            className="max-w-[6.7rem] outline-0"
            min={0}
          />
        </label>

        <label className="flex justify-between">
          ÁREA PRIVATIVA MÍNIMA
          <input type="text" className="max-w-[6.7rem] outline-0" />
        </label>
        <label className="flex justify-between">
          ÁREA PRIVATIVA MÁXIMA
          <input
            type="text"
            className="max-w-[6.7rem] outline-0"
          />
        </label>
      </div>
    </div>
  )
}

export default SideFilterFields
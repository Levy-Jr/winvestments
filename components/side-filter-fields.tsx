"use client"

import Image from "next/image"
import GoldenArrowDown from "@/public/header/golden-arrow-down.svg"
import GoldenPlus from "@/public/header/golden-plus.svg"
import GoldenMinus from "@/public/header/golden-minus.svg"

type FilterStates = {
  cities: any[];
  districts: any[];
  params: {
    city: string;
    district: string;
    type: string;
    minValue: number | "";
    maxValue: number | "";
    condominium: string;
    dormitory: string;
    vacancies: string;
  }
}

type SideFiltersProps = {
  searchState: FilterStates;
  setSearchState: React.Dispatch<React.SetStateAction<FilterStates>>
}

const SideFilterFields = () => {
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
        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">DORMITÓRIOS <span>0</span></span>
          </div>
          <button className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
          <button className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
        </div>
        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">SUÍTES <span>0</span></span>
          </div>
          <button className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
          <button className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
        </div>
        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">VAGAS DE GARAGEM <span>0</span></span>
          </div>
          <button className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
          <button className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
        </div>
        <div className="flex gap-2">
          <div className="bg-white flex-1 rounded-[.625rem] p-[.4375rem] px-[.9375rem]">
            <span className="flex justify-between flex-1">BANHEIROS <span>0</span></span>
          </div>
          <button className="p-3"><Image src={GoldenPlus} alt="Adicionar" /></button>
          <button className="p-3"><Image src={GoldenMinus} alt="Diminuir" /></button>
        </div>
        <label className="flex justify-between">
          PREÇO MÍNIMO
          <input type="text" className="max-w-[8.125rem] outline-0" />
        </label>
        <label className="flex justify-between">
          PREÇO MÁXIMO
          <input type="text" className="max-w-[8.125rem] outline-0" />
        </label>
        <label className="flex justify-between">
          ÁREA PRIVATIVA MÍNIMA
          <input type="text" className="max-w-[8.125rem] outline-0" />
        </label>
        <label className="flex justify-between">
          ÁREA PRIVATIVA MÁXIMA
          <input type="text" className="max-w-[8.125rem] outline-0" />
        </label>
      </div>
    </div>
  )
}

export default SideFilterFields
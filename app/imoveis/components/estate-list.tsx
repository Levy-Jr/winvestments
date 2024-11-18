"use client"

import Link from "next/link"
import { Imóvel } from "smart-imob-types"
import EstateImgCarousel from "./estate-img-carousel"
import { formatCurrency } from "@/utils/formatters"
import Image from "next/image"

import SuiteIcon from "@/public/estates/suite-icon.svg"
import DormitoryIcon from "@/public/estates/dormitory-icon.svg"
import VacanciesIcon from "@/public/estates/vacancies-icon.svg"
import PrivateIcon from "@/public/estates/private-area-icon.svg"

const Estate = ({ imovel }: { imovel: Imóvel }) => {
  return (
    <li className="bg-white mt-5 relative rounded-[0.4375rem] overflow-hidden">
      <p className="text-[1.375rem] font-light absolute z-10 bg-[#000000b3] text-white top-[.625rem] uppercase rounded-[100vmax] py-1 px-8 left-[.625rem]">{imovel.tipo}</p>
      <p className="font-light absolute z-10 bg-[#000000b3] text-white top-[4rem] uppercase rounded-[100vmax] py-2 px-8 left-[.625rem]">{imovel.bairro}/{imovel.cidade.nome}</p>
      <EstateImgCarousel
        fotos={imovel.fotos}
      />
      <div className="">
        <ul className="relative font-light flex justify-around mt-5 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[.0625rem] before:bg-gradient-to-r before:from-[#A38243] before:to-[#D2C29E] *:grid *:gap-1 *:place-items-center">
          <li>
            <Image
              src={SuiteIcon}
              alt="Ícone de suite"
            />
            <b>{ }</b>
            SUÍTES
          </li>
          <li>
            <Image
              src={DormitoryIcon}
              alt="Ícone de dormitório"
            />
            <b>{ }</b>
            QUARTOS
          </li>
          <li>
            <Image
              src={VacanciesIcon}
              alt="Ícone de vagas"
            />
            <b>{ }</b>
            VAGAS
          </li>
          <li>
            <Image
              src={PrivateIcon}
              alt="Ícone de área privativa"
            />
            <b>{ }</b>
            PRIVATIVOS
          </li>
        </ul>
        <div className="relative flex p-[.9375rem] items-center justify-between ">
          <p>Valor <span className="font-semibold text-2xl">{formatCurrency(imovel.preço_venda)}</span></p>
          <Link className="inline-block rounded-[100vmax] py-[.625rem] text-center w-[min(100%,15.625rem)] bg-[#95a3ab] hover:bg-[#BEA473] text-white" href="">VEJA MAIS</Link>
        </div>
      </div>
    </li>
  )
}

export default Estate
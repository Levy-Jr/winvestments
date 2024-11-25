"use client"

import Link from "next/link"
import { Imóvel } from "smart-imob-types"
import { formatCurrency } from "@/utils/formatters"
import Image from "next/image"

import SuiteIcon from "@/public/estates/suite-icon.svg"
import DormitoryIcon from "@/public/estates/dormitory-icon.svg"
import VacanciesIcon from "@/public/estates/vacancies-icon.svg"
import PrivateIcon from "@/public/estates/private-area-icon.svg"
import ConsultantImgCarousel from "./consultant-img-carousel"

const ConsultantEstate = ({ imovel }: { imovel: Imóvel }) => {
  return (
    <li
      className="bg-white mt-5 ml-2 flex-[0_0_100%] md:flex-[0_0_calc(100%/2)] xl:flex-[0_0_calc(100%/3)] relative rounded-[0.4375rem] overflow-hidden"
    >
      <p className="text-[1.375rem] font-light absolute z-10 bg-[#000000b3] text-white top-[.625rem] uppercase rounded-[100vmax] py-1 px-8 left-[.625rem]">{imovel.tipo}</p>
      <p className="font-light text-sm absolute z-10 bg-[#000000b3] text-white top-[4rem] uppercase rounded-[100vmax] py-2 px-8 left-[.625rem]">{imovel.bairro}/{imovel.cidade.nome}</p>
      <div>
        <ConsultantImgCarousel
          fotos={imovel.fotos}
        />
      </div>
      <div className="py-4 text-sm">
        <ul className={"relative [&_span]:font-bold font-light flex justify-around items-center mt-5 pb-4 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[.0625rem] before:bg-gradient-to-r before:from-[#A38243] before:to-[#D2C29E] *:grid *:place-items-center *:gap-2 *:leading-[1] [&_span]:text-[1.25rem]"}>
          {imovel.suítes ?
            (<li>
              <Image
                className="max-w-[3.4375rem] max-h-10"
                src={SuiteIcon}
                alt="Ícone de suite"
              />
              <span>{imovel.suítes}</span>
              SUÍTES
            </li>) : null
          }
          {imovel.dormitórios &&
            !imovel.não_mostrar_dormítorios ? (
            <li>
              <Image
                className="max-w-[4.6875rem] max-h-10"
                src={DormitoryIcon}
                alt="Ícone de dormitório"
              />
              <span>{imovel.dormitórios}</span>
              QUARTO{`${Number(imovel.dormitórios || 0) > 1 ? "S" : ""}`}
            </li>
          ) : null}
          {imovel.vagas ? (
            <li>
              <Image
                className="max-w-[4.6875rem] max-h-10"
                src={VacanciesIcon}
                alt="Ícone de vagas"
              />
              <span>{imovel.vagas}</span>
              VAGAS
            </li>
          ) : null}
          {imovel.area_privativa ? (
            <li>
              <Image
                className="max-w-[4.0625rem] max-h-10"
                src={PrivateIcon}
                alt="Ícone de área privativa"
              />
              <span>{imovel.area_privativa} M²</span>
              PRIVATIVOS
            </li>
          ) : null}
        </ul>
        <div className="relative flex flex-col items-center gap-3 pt-[.9375rem] px-[.9375rem]">
          {imovel.preço_venda &&
            (imovel.venda_exibir_valor_no_site === undefined || imovel.venda_exibir_valor_no_site === true)
            ?
            (<p className="text-sm">Valor <span className="ml-1 font-semibold text-2xl">{formatCurrency(imovel.preço_venda)}</span></p>)
            :
            (<p className="text-lg">Consulte-nos</p>)
          }
          <Link
            className={"inline-block rounded-[100vmax] py-[.625rem] text-center bg-[#95a3ab] hover:bg-[#BEA473] text-white w-[min(100%,15.625rem)]"}
            href=""
          >VEJA MAIS</Link>
        </div>
      </div>
    </li>
  )
}

export default ConsultantEstate
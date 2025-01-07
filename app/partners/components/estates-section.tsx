"use client"

import { cn } from "@/lib/utils"
import { formatCurrency } from "@/utils/formatters"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Imóvel } from "smart-imob-types"

const EstatesSection = ({ imoveis }: { imoveis: Imóvel[] }) => {
  const [activeTab, setActiveTab] = useState<'forSale' | 'recentlySold'>('forSale')
  const [visibleSaleItems, setVisibleSaleItems] = useState(2)
  const [visibleSoldItems, setVisibleSoldItems] = useState(2)

  const forSaleEstates = imoveis.filter(imovel => !imovel.vendido)
  const recentlySoldEstates = imoveis.filter(imovel => imovel.vendido)

  const handleLoadMore = () => {
    if (activeTab === "forSale") {
      setVisibleSaleItems(prev => Math.min(prev + 2, forSaleEstates.length))
    }

    if (activeTab === "recentlySold") {
      setVisibleSoldItems(prev => Math.min(prev + 2, recentlySoldEstates.length))
    }
  }

  return (
    <section className="mb-6" id="imoveis">
      <h2 className="text-6xl text-center my-20">Imóveis Exclusivos</h2>
      <div className="flex flex-col sm:flex-row gap-14 *:flex-1 *:pb-2 *:border-b-black *:text-3xl">
        <button
          onClick={() => setActiveTab('forSale')}
          className={cn("border-b-2", activeTab == "forSale" ? "border-b-4 font-bold" : "")}
        >À VENDA</button>
        <button
          onClick={() => setActiveTab('recentlySold')}
          className={cn("border-b-2", activeTab == "recentlySold" ? "border-b-4 font-bold" : "")}
        >VENDIDOS RECENTEMENTE</button>
      </div>
      {activeTab === "forSale" &&
        <ul className="mt-12 grid md:grid-cols-2 gap-14">
          {forSaleEstates
            .slice(0, visibleSaleItems)
            .map(imovel => (
              <li key={imovel.db_id}>
                <Link
                  href={`/imovel/venda/${imovel.db_id}`}
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imovel.fotos[0].source.uri}
                      alt=""
                      fill
                    />
                  </div>
                  <h3 className="text-5xl mt-4 mb-2">{imovel.tipo}</h3>
                  <p className="text-xl uppercase">
                    {imovel.bairro ?
                      `${imovel.bairro} | `
                      : null}
                    {imovel.area_privativa ?
                      `${imovel.area_privativa}M² |`
                      : null}
                    {imovel.suítes ?
                      `${imovel.suítes} suíte${Number(imovel.suítes) === 1 ? "" : "s"} | `
                      : null}
                    {imovel.vagas ?
                      `${imovel.vagas} vaga${Number(imovel.vagas) === 1 ? "" : "s"}`
                      : null}
                  </p>
                  <p className="font-bold text-xl">{imovel.vendido ? "Vendido" : formatCurrency(imovel.preço_venda)}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      }
      {activeTab === "recentlySold" &&
        <ul className="mt-12 grid md:grid-cols-2 gap-14">
          {recentlySoldEstates
            .slice(0, visibleSoldItems)
            .map(imovel => (
              <li
                key={imovel.db_id}
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={imovel.fotos[0].source.uri}
                    alt=""
                    fill
                  />
                </div>
                <h3 className="text-5xl mt-4 mb-2">{imovel.tipo}</h3>
                <p className="text-xl uppercase">
                  {imovel.bairro ?
                    `${imovel.bairro} | `
                    : null}
                  {imovel.area_privativa ?
                    `${imovel.area_privativa}M² |`
                    : null}
                  {imovel.suítes ?
                    `${imovel.suítes} suíte${Number(imovel.suítes) === 1 ? "" : "s"} | `
                    : null}
                  {imovel.vagas ?
                    `${imovel.vagas} vaga${Number(imovel.vagas) === 1 ? "" : "s"}`
                    : null}
                </p>
                <p className="font-bold text-xl">{imovel.venda ? "Vendido" : formatCurrency(imovel.preço_venda)}</p>
              </li>
            ))
          }
        </ul>
      }

      <div className="mt-10 mb-6 flex justify-center">
        <button
          className="text-xl text-[#adacb4]"
          onClick={handleLoadMore}
        >
          CARREGAR MAIS
        </button>
      </div>
    </section>
  )
}

export default EstatesSection
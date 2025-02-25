import processFilters from "@/utils/process-backend-filters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Corretor, Empresa } from "smart-imob-types"

const getData = async (): Promise<{
  corretores: Corretor[]
}> => {
  const uri = process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any = process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params = new URLSearchParams({
    empresa_id,
    filtros: JSON.stringify(
      processFilters({
        ["corretor.aparecer_site"]: "0"
      })
    )
  })

  const corretores = await fetch(`${uri}/corretores?${params.toString()}`)

  if (!corretores.ok) notFound()

  const enterprise = await fetch(`${uri}/empresas/site/${empresa_id}`)

  if (!enterprise.ok) notFound()

  return {
    corretores: await corretores.json()
  }
}

const PartnersList = async () => {
  const { corretores } = await getData()


  return (
    <ul className="mb-20 grid place-content-around grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6">
      {corretores
        .filter(corretor => corretor.parceiro)
        .map(parceiro => (
          <li
            className="bg-white grid content-between rounded-t-lg overflow-hidden"
            key={parceiro.db_id}
          >
            <Link href={`/partners/${parceiro.db_id}`}>
              <Image
                className="w-full [aspect-ratio:3/4] object-cover"
                src={parceiro.foto ?? ""}
                alt={parceiro.nome}
                width={300}
                height={500}
              />
            </Link>
            <div className="text-center py-[.9375rem]">
              <h3 className="font-newsReader uppercase text-2xl leading-[1] mb-[.625rem]">{parceiro.nome}</h3>
              <p className="uppercase mb-3">{parceiro.cargo}</p>
              <div className="relative before:absolute before:h-[.125rem] before:left-0 before:top-0 before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown before:w-full">
                <div className="pt-[.9375rem]">
                  <Link
                    href={`/partners/${parceiro.db_id}`}
                    className="block bg-buttonGray hover:bg-darkBrown py-[.5rem] rounded-[100vmax] text-white w-[min(15.625rem,100%)] mx-auto"
                  >VEJA MAIS</Link>
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default PartnersList
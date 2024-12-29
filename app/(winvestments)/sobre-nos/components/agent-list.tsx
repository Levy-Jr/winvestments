import processFilters from "@/utils/process-backend-filters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Corretor, Empresa } from "smart-imob-types"

const getData = async (): Promise<{
  corretores: Corretor[];
  empresa: Empresa
}> => {
  const uri = process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any = process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params = new URLSearchParams({
    empresa_id,
    filtros: JSON.stringify(
      processFilters({
        ["corretor.aparecer_site"]: "1"
      })
    )
  })

  const agents = await fetch(`${uri}/corretores?${params.toString()}`, {
    next: { tags: ["corretores"], revalidate: 3600 }
  })

  if (!agents.ok) notFound()

  const enterprise = await fetch(`${uri}/empresas/site/${empresa_id}`)

  if (!enterprise.ok) notFound()

  return {
    corretores: await agents.json(),
    empresa: await enterprise.json()
  }
}

const AgentList = async () => {
  const { corretores, empresa } = await getData()

  return (
    <ul className="mb-20 grid place-content-around grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6">
      {corretores
        .filter(corretor => corretor.aparecer_site)
        .map(corretor => (
          <li
            className="bg-white grid content-between rounded-t-lg overflow-hidden"
            key={corretor.db_id}
          >
            <Link href={`/consultor/${corretor.db_id}`}>
              <Image
                className="w-full [aspect-ratio:3/4] object-cover"
                src={corretor.foto ?? ""}
                alt={corretor.nome}
                width={300}
                height={500}
              />
            </Link>
            <div className="text-center py-[.9375rem]">
              <h3 className="font-newsReader uppercase text-2xl leading-[1] mb-[.625rem]">{corretor.nome}</h3>
              <p className="uppercase mb-3">{corretor.cargo}</p>
              <div className="relative before:absolute before:h-[.125rem] before:left-0 before:top-0 before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown before:w-full">
                <div className="pt-[.9375rem]">
                  <Link
                    href={`/consultor/${corretor.db_id}`}
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

export default AgentList
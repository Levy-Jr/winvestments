import EstateList from "@/components/estate-list";
import { getData } from "../../imoveis/locacao/[...filters]/data"

const ImoveisLancamentos = async (props: {
  params: Promise<{ filters: string[] }>
}) => {
  const { filters } = await props.params

  const newFilters: any = {};

  (await filters || []).forEach((segment: string) => {
    if (segment.startsWith("transacao-")) {
      const transacaoSlug = segment.replace("transacao-", "");
      newFilters.transacao = decodeURIComponent(transacaoSlug.replace(/-/g, " "));
    }
  })

  const { imoveis } = await getData(newFilters)

  return (
    <main className="w-lg-container mx-auto mb-20">
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{
          backgroundImage: `url('/marble-bg.webp')`
        }}
      />
      <h1 className="pt-20 mb-10 text-4xl text-center font-newsReader">{imoveis.total} IMÓVEIS À VENDA</h1>
      <EstateList
        imoveis={imoveis.nodes}
      />
    </main>
  )
}

export default ImoveisLancamentos
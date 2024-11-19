import slugify from "slugify";
import { getData } from "./data";
import { notFound } from "next/navigation";
import EstatesControls from "../components/estates-controls";
import Estate from "../components/estate-list";

const PAGE_SIZE = 12;

const revertSlug = (slug: string, originalList: any[], key: string) => {
  const slugifyOptions = {
    lower: true,
    strict: true,
    locale: "pt",
    remove: /[*+~.()'"!:@]/g,
  };

  const originalItem = originalList.find((item) => {
    const value = item[key] || item;
    if (typeof value !== "string") {
      console.warn(
        `Esperado uma string para a chave '${key}', mas recebeu:`,
        value
      );
      return false;
    }
    const itemSlug = slugify(value, slugifyOptions);
    return itemSlug === slug;
  });

  return originalItem
    ? originalItem[key] || originalItem
    : decodeURIComponent(slug.replace(/-/g, " "));
};

const Imoveis = async ({
  params,
  searchParams
}: {
  params: { filters: string[] },
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { filters } = await params
  const searchParamsRes = await searchParams

  const newFilters: any = {};

  (filters || []).forEach((segment: string) => {
    if (segment.startsWith("transacao-")) {
      const transacaoSlug = segment.replace("transacao-", "");
      newFilters.transacao = decodeURIComponent(transacaoSlug.replace(/-/g, " "));
    } else if (segment.startsWith("estado-")) {
      const estadoSlug = segment.replace("estado-", "");
      newFilters.estado = estadoSlug;
    } else if (segment.startsWith("cidade-")) {
      const cidadeSlug = segment.replace("cidade-", "");
      newFilters.cidade = cidadeSlug;
    } else if (segment.startsWith("banheiros-")) {
      const banheiroSlug = segment.replace("banheiros-", "")
      newFilters.banheiros = banheiroSlug
    } else if (segment.startsWith("bairro-")) {
      const bairroSlug = segment.replace("bairro-", "");
      newFilters.bairro = bairroSlug;
    } else if (segment.startsWith("tipo-")) {
      const tipoSlug = segment.replace("tipo-", "");
      newFilters.tipo = tipoSlug;
    } else if (segment.startsWith("caracteristicas-")) {
      const caracteristicasSlug = segment.replace("caracteristicas-", "");
      newFilters.caracteristicas = decodeURIComponent(caracteristicasSlug);
    } else if (segment.startsWith("dormitorios-")) {
      const dormitoriosSlug = segment.replace("dormitorios-", "");
      newFilters.dormitorios = dormitoriosSlug;
    } else if (segment.startsWith("vagas-")) {
      const vagasSlug = segment.replace("vagas-", "");
      newFilters.vagas = vagasSlug;
    } else if (segment.startsWith("preco-min-")) {
      const valorMin = Number(segment.replace("preco-min-", ""));
      if (!isNaN(valorMin)) {
        newFilters.preco_min = valorMin;
      }
    } else if (segment.startsWith("preco-max-")) {
      const valorMax = Number(segment.replace("preco-max-", ""));
      if (!isNaN(valorMax)) {
        newFilters.preco_max = valorMax;
      }
    } else if (segment.startsWith("codigo-")) {
      const codigoSlug = segment.replace("codigo-", "");
      newFilters.codigo = codigoSlug;
    } else if (segment.startsWith("pagina-")) {
      const paginaNum = Number(segment.replace("pagina-", ""));
      if (!isNaN(paginaNum)) {
        newFilters.pagina = paginaNum;
      }
    } else if (segment.startsWith("total-")) {
      const totalNum = Number(segment.replace("total-", ""));
      if (!isNaN(totalNum)) {
        newFilters.total = totalNum;
      }
    }
  })

  const pagina = Number(newFilters.pagina ?? searchParamsRes.pagina ?? "1")

  const { bairros, cidades, empresa, imoveis, tipos } = await getData(newFilters)

  if (newFilters.cidade) {
    const decodedCityFilter = decodeURIComponent(newFilters.cidade).split(',')
    newFilters.cidade = decodedCityFilter.map(item => revertSlug(item, cidades, "nome"))
  }

  if (newFilters.bairro) {
    const decodedDistrictFilter = decodeURIComponent(newFilters.bairro).split(',')
    newFilters.bairro = decodedDistrictFilter.map(item => revertSlug(item, bairros, "bairro"))
  }

  if (newFilters.tipo) {
    const decodedTypeFilter = decodeURIComponent(newFilters.tipo).split(',')
    newFilters.tipo = decodedTypeFilter.map(item => revertSlug(item, tipos, "tipo"))
  }

  // Validação dos filtros
  const cidadeValida = newFilters.cidade
    ? cidades.some((c) => newFilters.cidade.includes(c.nome))
    : true;

  const bairroValido = newFilters.bairro
    ? bairros.some((b) => newFilters.bairro.includes((b.bairro || "")))
    : true;

  const tipoValido = newFilters.tipo
    ? tipos.some((t) => newFilters.tipo.includes(t.toLowerCase()))
    : true;

  if (
    (newFilters.cidade && !cidadeValida) ||
    (newFilters.bairro && !bairroValido) ||
    (newFilters.tipo && !tipoValido)
  ) {
    console.warn("Filtros inválidos encontrados, redirecionando para 404.");
    notFound();
  }

  const totalPages = Math.ceil(imoveis.total / PAGE_SIZE)
  return (
    <main className="w-lg-container text-grayAccent mx-auto mb-20">
      <div
        className="fixed bg-cover bg-fixed -z-10 inset-0"
        style={{
          backgroundImage: `url('/marble-bg.webp')`
        }}
      />
      <h1 className="pt-20 mb-10 text-4xl text-center font-newsReader">{imoveis.total} IMÓVEIS À VENDA</h1>
      <EstatesControls />
      <ul className="grid w-[min(100%,43.75rem)] mx-auto lg:w-auto lg:mx-0 center lg:grid-cols-2 gap-10">
        {imoveis.nodes.map((imovel, index) => (
          <Estate
            key={index}
            imovel={imovel}
          />
        ))}
      </ul>
    </main>
  )
}

export default Imoveis
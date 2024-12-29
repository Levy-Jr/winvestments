import { Empresa, Imóvel } from "smart-imob-types";
import processarFiltros from "@/utils/process-backend-filters";
import checkFetchStatus from "@/utils/check-fetch-status";
import ordenacoesBackend from "@/utils/process-backend-orders";
import { notFound } from "next/navigation";
import slugify from "slugify";

const PAGE_SIZE = 12;

const slugifyOptions = {
  lower: true, // Converte para minúsculas
  strict: true, // Remove caracteres especiais
  locale: "pt", // Define o locale para português
  remove: /[*+~.()'"!:@]/g, // Remove caracteres adicionais
};

// Função auxiliar para slugificar
const slugifyString = (str: string | undefined | null) => {
  const safeStr = str || "";
  const slugfied = slugify(safeStr, slugifyOptions);
  return slugfied;
};

// Função para obter ID a partir do nome
const getIdByName = (list: any[], name: string, key: string = "nome") => {
  const item = list.find((el) => {
    const value = el[key] || el
    if (typeof value !== "string") {
      console.warn(`Valor de '${key}' não é uma string para o item:`, el);
      return false;
    }
    return slugifyString(value) === name;
  });
  return item ? item.id || item[key] || item : null;
};

async function getData(filtros: any): Promise<{
  imoveis: {
    nodes: Imóvel[];
    total: number;
  };
  cidades: any[];
  tipos: any[];
  empresa: Empresa;
  bairros: any[];
}> {
  const { pagina = 1, ordem = 1, ...rest } = filtros;
  const uri =
    process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any =
    process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params = new URLSearchParams({
    empresa_id,
  });

  const paramsCidades = new URLSearchParams({
    empresa_id,
    site: "1",
  });

  const responseCidades = await fetch(
    `${uri}/cidades?${paramsCidades.toString()}`,
    {
      next: { tags: ["imoveis-info", "imoveis-cidades"], revalidate: 3600 },
    }
  );
  await checkFetchStatus(responseCidades, "cidades");
  const cidades = await responseCidades.json();

  const responseBairros = await fetch(
    `${uri}/imoveis/bairros-por-cidade?${params.toString()}`,
    {
      next: { tags: ["imoveis-info"], revalidate: 3600 },
    }
  );
  await checkFetchStatus(responseBairros, "bairros");
  const bairros = await responseBairros.json();

  const responseTipos = await fetch(
    `${uri}/imoveis/tipos?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  await checkFetchStatus(responseTipos, "tipos");
  const tipos = await responseTipos.json();

  // Fetch Empresa
  const empresaResponse = await fetch(`${uri}/empresas/site/${empresa_id}`, {
    next: { tags: ["empresas"], revalidate: 3600 },
  });

  if (!empresaResponse.ok) {
    notFound();
  }
  const empresa = await empresaResponse.json();

  // Mapeamento de Slugs para IDs
  const backendFilters: any = {};

  if (rest.cidade) {
    const cidade_id = getIdByName(cidades, rest.cidade, "nome");
    if (cidade_id) {
      backendFilters.cidade_id = cidade_id;
    }
  }

  if (rest.bairro) {
    const bairro = getIdByName(bairros, rest.bairro, "bairro");
    if (bairro) {
      backendFilters.bairros = [bairro];
    }
  }

  if (rest.tipo) {
    const tipo = getIdByName(tipos, rest.tipo, "tipo");
    if (tipo) {
      backendFilters.tipos = [tipo];
    }
  }

  if (rest.caracteristicas) {
    backendFilters.caracteristicas = rest.caracteristicas;
  }

  if (rest.transacao) {
    backendFilters.transacao = rest.transacao;
  }

  if (rest.dormitorios) {
    backendFilters.dormitorios = rest.dormitorios;
  }

  if (rest.suites) {
    backendFilters.suites = rest.suites;
  }

  if (rest.banheiros) {
    backendFilters.banheiros = rest.banheiros
  }

  if (rest.vagas) {
    backendFilters.vagas = rest.vagas;
  }

  if (rest.preco_min) {
    console.log('preço')
    backendFilters['imovel.preco_min'] = rest.preco_min;
  }

  if (rest.preco_max) {
    backendFilters['imovel.preco_max'] = rest.preco_max;
  }
  /* 
    if (rest.area_min) {
      console.log("minimo area privada")
      backendFilters['min_private_area'] = rest.area_min
    }
    if (rest.area_min) {
      backendFilters['max_private_area'] = rest.area_max
    } */

  if (rest.codigo) {
    backendFilters.código = rest.codigo;
  }

  const processedFilters = processarFiltros(backendFilters);

  const params_imoveis = new URLSearchParams({
    limit: PAGE_SIZE.toString(),
    startAt: (((pagina ?? 1) - 1) * PAGE_SIZE).toString(),
    filtros: JSON.stringify(processedFilters),
    order: JSON.stringify(
      ordem && ordem > 0 ? [ordenacoesBackend[ordem ?? 1]] : []
    ),
    empresa_id,
  });

  // Fetch Imóveis
  const imoveisResponse = await fetch(
    `${uri}/imoveis/site/paginado?${params_imoveis.toString()}`,
    {
      next: { tags: ["imoveis-paginado"] },
    }
  );

  await checkFetchStatus(imoveisResponse, "imoveis");
  const imoveis = await imoveisResponse.json();

  return {
    imoveis,
    bairros,
    cidades,
    tipos,
    empresa,
  };
}

export { getData };
import { Empresa, Imóvel } from "smart-imob-types";
import processarFiltros from "@/utils/process-backend-filters";
import checkFetchStatus from "@/utils/check-fetch-status";
import ordenacoesBackend from "@/utils/process-backend-orders";
import { notFound } from "next/navigation";

const PAGE_SIZE = 12;

async function getData(filtros: any): Promise<{
  imoveis: {
    nodes: Imóvel[];
    total: number;
  };
  empresa: Empresa;
}> {
  const { pagina = 1, ordem = 1, ...rest } = filtros;
  const uri =
    process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any =
    process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params = new URLSearchParams({
    empresa_id,
  });

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

  if (rest.transacao) {
    backendFilters.transacao = rest.transacao
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
    empresa
  };
}

export { getData };
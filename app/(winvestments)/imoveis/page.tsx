import Imoveis from "./[...filters]/page";

const ListingEstatePage = async ({
  params,
  searchParams
}: {
  params: Promise<{ filters: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  return (
    <Imoveis params={params} searchParams={searchParams} />
  )
}

export default ListingEstatePage
import Imoveis from "./[...filters]/page";

const ListingEstatePage = async ({
  params,
  searchParams
}: {
  params: { filters: string[] };
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <Imoveis params={params} searchParams={searchParams} />
  )
}

export default ListingEstatePage
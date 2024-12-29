import Locacao from "./[...filters]/page"

const LocacaoPage = ({
  params
}: {
  params: Promise<{ filters: string[] }>;
}) => {
  return (
    <Locacao
      params={params}
    />
  )
}

export default LocacaoPage
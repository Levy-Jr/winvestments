import ImoveisLancamentos from "./[...filters]/page"

const Lancamentos = ({
  params
}: {
  params: Promise<{ filters: string[] }>;
}) => {
  return (
    <ImoveisLancamentos
      params={params}
    />
  )
}

export default Lancamentos
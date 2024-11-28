import ImoveisProntos from "./[...filters]/page"

const ProntosPage = ({
  params
}: {
  params: Promise<{ filters: string[] }>;
}) => {
  return (
    <ImoveisProntos
      params={params}
    />
  )
}

export default ProntosPage
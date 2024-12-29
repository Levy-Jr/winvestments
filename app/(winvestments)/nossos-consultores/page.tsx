import Image from "next/image"
import AgentList from "../sobre-nos/components/agent-list"
import LogoDivisor from "@/public/logo.svg"

const OurAgentsPage = () => {

  return (
    <main className="w-lg-container mt-20 mx-auto">
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{ backgroundImage: `url('/marble-bg.webp')` }}
      />
      <h1 className="font-newsReader text-center text-4xl">ENCONTRE UM AGENTE IMOBILIÁRIO</h1>
      <input
        className="bg-white my-10 bg-no-repeat bg-[size:1rem] bg-[position:1rem_center] rounded-2xl text-sm text-grayAccent pl-10 py-2 pr-3 w-[min(100%,20.625rem)] block mx-auto outline-none"
        style={{
          backgroundImage: `url('/header/search-icon.svg')`
        }}
        type="text"
        placeholder="Digite o nome do agente"
      />

      <h2 className="text-center font-newsReader text-[1.75rem] mb-10 text-grayAccent">OU ESCOLHA UM DOS PROFISSIONAIS ABAIXO</h2>
      <AgentList />
      <div className="flex items-center gap-4 mb-[1.875rem] before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
        <Image
          src={LogoDivisor}
          alt="Logo"
        />
      </div>
    </main>
  )
}

export default OurAgentsPage
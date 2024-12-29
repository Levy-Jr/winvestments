"use client"

import { formatPhoneNumber } from "@/utils/format-phone-number"
import { useState } from "react"

const Form = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [telefone, setTelefone] = useState("")
  const [canal, setCanal] = useState("email")
  const [loading, setLoading] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    if (value.length <= 15) {
      const formattedNumber = formatPhoneNumber(value)
      setTelefone(formattedNumber)
    }
  }

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const onConfirm = async () => {
    try {
      setLoading(true)
      if (!nome || !email || !telefone || !mensagem || !canal) {
        setLoading(false)
        return alert("Preencha todos os campos obrigatórios.")
      }
      if (!validateEmail(email)) {
        setLoading(false)
        return alert("O email é inválido!")
      }
      if (!telefone.match(/^\([0-9]{2}(?:\))\s?[0-9]{5}(?:-)[0-9]{4}$/)) {
        setLoading(false)
        return alert("Insira um telefone válido!")
      }
      const cliente = {
        nome,
        email,
        telefone: telefone.replace(/\D/g, ""),
        timeline: [
          {
            descrição: mensagem,
            titulo: "Mensagem cliente",
            data: new Date()
          }
        ],
        proprietario: false,
        canal
      }

      const uri = process.env.BACKED_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;

      const response = await fetch(`${uri}/clientes`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
      })

      const res = await response.json()

      if (res.success) {
        alert("Informações enviadas com sucesso!")
        setNome("")
        setTelefone("")
        setMensagem("")
        setEmail("")
        setCanal("")
      } else {
        console.log(res)
        alert("Ocorreu um erro ao enviar as informações.")
      }

      setLoading(false)
    } catch (error) {
      console.log("Erro ao enviar o contato:", error)
      setLoading(false)
      alert("Ocorreu um erro inesperado.")
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onConfirm()
      }}
      className="relative w-[min(100%,31.25rem)] bg-white mx-auto rounded-[.625rem] my-[4.6875rem] p-5 before:absolute before:inset-0 before:-z-10 before:-m-[.125rem] before:rounded-[inherit] before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown"
    >
      <h2 className="font-newsReader text-3xl text-grayAccent text-center">FALE CONOSCO</h2>
      <div className="text-grayAccent *:placeholder:text-black mt-10 mb-[1.875rem] grid gap-[.625rem] [&>input]:pl-5 [&>input]:rounded-[100vmax] *:outline-none [&>input]:py-2 *:border-[.0625rem] *:border-[#F2F2F2]">
        <input
          onChange={e => setNome(e.target.value)}
          value={nome}
          name="nome"
          type="text"
          placeholder="Nome"
        />
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          name="email"
          type="text"
          placeholder="E-mail"
        />
        <input
          onChange={handlePhoneChange}
          value={telefone}
          type="tel"
          placeholder="Telefone"
        />
        <textarea
          onChange={e => setMensagem(e.target.value)}
          value={mensagem}
          className="rounded-[1.875rem] min-h-[6.25rem] p-5 resize-none"
          placeholder="Deixe sua mensagem"
        />
      </div>
      <div className="text-center">
        <p>Prefiro contato via:</p>
        <div className="flex items-center gap-5 justify-center">
          <label>
            <input
              onChange={() => setCanal("whatsapp")}
              checked={canal === "whatsapp" ? true : false}
              type="radio"
              name="canal"
              value="whatsapp"
            /> <span>WhatsApp</span>
          </label>
          <label>
            <input
              onChange={() => setCanal("email")}
              type="radio"
              checked={canal === "email" ? true : false}
              name="canal"
              value="email"
            /> <span>E-mail</span>
          </label>
          <label>
            <input
              onChange={() => setCanal("telefone")}
              checked={canal === "telefone" ? true : false}
              type="radio"
              name="canal"
              value="telefone"
            /> <span>Telefone</span>
          </label>
        </div>
      </div>
      <div className="mt-[1.875rem]">
        <button className="bg-[#95a3ab] hover:bg-lightBrown py-2 text-lg block w-[min(100%,15.625rem)] text-center mx-auto text-white rounded-[100vmax]">ENVIAR</button>
      </div>
    </form>
  )
}

export default Form
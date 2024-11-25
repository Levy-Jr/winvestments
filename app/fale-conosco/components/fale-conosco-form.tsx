"use client"

const Form = () => {
  return (
    <form className="relative w-[min(100%,31.25rem)] bg-white mx-auto rounded-[.625rem] my-[4.6875rem] p-5 before:absolute before:inset-0 before:-z-10 before:-m-[.125rem] before:rounded-[inherit] before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown">
      <h2 className="font-newsReader text-3xl text-grayAccent text-center">FALE CONOSCO</h2>
      <div className="text-grayAccent *:placeholder:text-black mt-10 mb-[1.875rem] grid gap-[.625rem] [&>input]:pl-5 [&>input]:rounded-[100vmax] *:outline-none [&>input]:py-2 *:border-[.0625rem] *:border-[#F2F2F2]">
        <input
          type="text"
          placeholder="Nome"
        />
        <input
          type="text"
          placeholder="E-mail"
        />
        <input
          type="text"
          placeholder="Telefone"
        />
        <textarea
          className="rounded-[1.875rem] min-h-[6.25rem] p-5 resize-none"
          placeholder="Deixe sua mensagem"
        />
      </div>
      <div className="text-center">
        <p>Prefiro contato via:</p>
        <div className="flex items-center gap-5 justify-center">
          <label>
            <input type="radio" name="contact" /> <span>WhatsApp</span>
          </label>
          <label>
            <input type="radio" defaultChecked name="contact" /> <span>E-mail</span>
          </label>
          <label>
            <input type="radio" name="contact" /> <span>Telefone</span>
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
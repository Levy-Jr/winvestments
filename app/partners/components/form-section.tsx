const FormSection = () => {
  return (
    <section className="mt-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <h2 className="flex-1 text-4xl md:text-6xl">Para aqueles que buscam a máxima experiência em atendimento, expertise e qualidade em imóveis alto padrão em Curitiba</h2>
        <div className="flex-1">
          <form className="max-w-[40.625rem] ml-auto bg-[#d39864] px-10 pt-8 pb-8">
            <h2 className="text-3xl">ENTRE EM CONTATO</h2>
            <div className="grid mt-4 gap-4 *:text-xl *:bg-[#e6c5a8] *:placeholder:text-black *:text-black *:px-3 *:py-3">
              <input type="text" placeholder="NOME*" name="" id="" />
              <input type="email" placeholder="EMAIL*" name="" id="" />
              <input type="text" placeholder="TELEFONE*" name="" id="" />
              <input type="text" placeholder="MENSAGEM" name="" id="" />
            </div>
            <button className="mt-3 text-2xl tracking-wide bg-[#333333] text-white px-7 py-3">ENVIAR &gt;</button>
          </form>
        </div>
      </div>
      <div className="md:flex gap-14 mt-12">
        <div className="flex-1">
          <div className="bg-gray-500 w-full h-full rounded-lg"></div>
          {/* <Image
          src={}
          alt=""
          /> */}
        </div>
        <div className="flex-1 my-auto max-w-[40.625rem] ml-auto">
          <h2 className="text-6xl">Minha história</h2>
          <p className="text-2xl mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in felis nec massa pharetra facilisis ac
            vitae arcu. Vivamus aliquam volutpat arcu, eget
            hendrerit est convallis a. Nunc id leo eget urna imperdiet
            mollis in ut ante. Fusce ut porttitor nulla. Pellentesque
            interdum odio felis.
            Pellentesque laoreet justo a augue lobortis suscipit.
            Integer bibendum fringilla interdum. Nulla vel turpis sit
            amet elit interdum euismod non non velit.
          </p>
        </div>
      </div>
      <ul className="mt-16 flex flex-wrap text-xl gap-10 justify-center">
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">WhatsApp</a>
        </li>
        <li>
          <a href="">Telefone</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
      </ul>
    </section>
  )
}

export default FormSection
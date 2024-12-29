import Image from "next/image"
import AboutUsImage from "@/public/aboutUs/about-us.webp"
import LocalIcon from "@/public/footer/golden-local-icon.svg"
import InstagramIcon from "@/public/footer/golden-instagram-icon.svg"
import TelIcon from "@/public/footer/golden-tel-icon.svg"
import LogoDivisor from "@/public/logo.svg"

const AboutUs = () => {
  return (
    <main className="w-lg-container mt-12 mx-auto text-grayAccent">
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{
          backgroundImage: `url('/marble-bg.webp')`
        }}
      />
      <h1 className="text-center font-newsReader text-4xl mb-10">QUEM SOMOS</h1>
      <div className="w-[min(100%,28.125rem)] mx-auto md:w-auto md:mx-0 md:flex gap-8 leading-[1.3]">
        <div className="md:flex-1">
          <Image
            src={AboutUsImage}
            alt="Fachada de uma loja da W Investments"
          />
        </div>
        <div className="md:flex-1 p-4 md:p-0">
          <h2 className="font-bold">Somos a W Investments</h2>
          <p className="mt-4">Sua imobiliária de alto padrão em Curitiba e região.</p>
          <p className="mt-4">Com anos de experiência, desenvolvemos um olhar especializado nesse mercado, focado nas necessidades de cada cliente.</p>
          <p className="mt-4">Apaixonados pelos detalhes que concretizam o sonho de morar bem, investir bem e viver bem, trabalhamos incansavelmente para apresentar soluções que não apenas atendam, mas excedam suas expectativas.</p>
          <p className="mt-4">Acreditamos que o sucesso reside nos detalhes. Por isso, vamos te guiar através de uma jornada imobiliária personalizada, onde cada detalhe conta na busca pela concretização dos seus desejos.</p>
          <p className="mt-4">Visite nossa loja física e descubra como transformamos cada pormenor em uma conquista significativa.</p>
          <ul className="mt-14 grid gap-4">
            <li className="flex items-center gap-3">
              <Image
                src={LocalIcon}
                alt="Local de endereço"
              />
              Shopping Pátio Batel - Loja 330 - Piso L3</li>
            <li>
              <a
                className="flex items-center gap-3"
                rel="noopener noreferrer"
                href="https://wa.me/5541991845430?text=[Chat%20atrav%C3%A9s%20do%20site]%20Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida,%20poderia%20me%20ajudar?">
                <Image src={TelIcon} width={25} alt="Telefone" />
                (41) 99184-5430</a>
            </li>
            <li>
              <a
                className="flex items-center gap-3"
                rel="noopener noreferrer"
                href="https://www.instagram.com/winvestments">
                <Image src={InstagramIcon} width={25} alt="Instagram" />
                @winvestments</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-12 flex items-center gap-4 before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
        <Image
          src={LogoDivisor}
          alt="Logo"
        />
      </div>
    </main>
  )
}

export default AboutUs
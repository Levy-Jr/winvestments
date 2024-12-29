import EstatesSection from "./components/estates-section"
import Footer from "./components/footer"
import FormSection from "./components/form-section"
import Header from "./components/header"
import HeroSection from "./components/hero-section"

const Partners = () => {
  return (
    <>
      <Header />
      <main className="text-black">
        <div className="relative">
          <div
            className="absolute inset-0 -top-[10.1875rem] w-full bg-cover z-0 bg-center before:bg-black/40 before:inset-0 before:absolute before:z-0"
            style={{
              backgroundImage: "url('/banners/amira-banner.webp')"
            }}
          />
          <HeroSection />
        </div>
        <div className="mx-auto w-container">
          <FormSection />
          <EstatesSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Partners
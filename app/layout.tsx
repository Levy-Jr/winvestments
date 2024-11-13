import type { Metadata } from "next";
import { Newsreader } from "next/font/google"
import "./globals.css";
import HeaderNav from "@/components/header";
import Footer from "@/components/footer";
import WppBtn from "@/components/wpp-btn";

const newsReader = Newsreader({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-news-reader'
})

export const metadata: Metadata = {
  title: "W Investments | Imóveis em Curitiba e região",
  description: "As melhores oportunidades em imóveis em Curitiba. Conte com nosso atendimento exclusivo e personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsReader.variable} antialiased`}
      >
        <HeaderNav />
        <WppBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}

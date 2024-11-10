import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/header";

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
        className={`antialiased`}
      >
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}

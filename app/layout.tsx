import localFont from "next/font/local"
import type { Metadata } from "next";
import { Newsreader, Roboto } from "next/font/google"
import "./globals.css";
import { WppModalProvider } from "@/contexts/wpp-modal-context";
import { ModalProvider } from "@/components/wpp-modal";
import WppBtn from "@/components/wpp-btn";

const barlow = localFont({
  src: [
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Thin.ttf",
      weight: "100",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-ExtraLight.ttf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-ExtraBold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/BarlowCondensed/BarlowCondensed-Black.ttf",
      weight: "900",
      style: "normal"
    },
  ],
  display: "swap",
  variable: '--font-barlow'
})

const extraCondensed = localFont({
  src: [
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedThin.ttf",
      weight: "100",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedExtraLight.ttf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedLight.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensed.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedMedium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedSemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedBold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedExtraBold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/ExtraCondensed/NotoSerif-ExtraCondensedBlack.ttf",
      weight: "900",
      style: "normal"
    },
  ],
  display: "swap",
  variable: '--font-extraCondensed'
})

const condensed = localFont({
  src: [
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Thin.ttf",
      weight: "100",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-ExtraLight.ttf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/Condensed/NotoSerifDisplay-Black.ttf",
      weight: "900",
      style: "normal"
    },
  ],
  display: "swap",
  variable: '--font-condensed'
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

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
        className={`${newsReader.variable} ${roboto.variable} ${barlow.variable} ${extraCondensed.variable} ${condensed.variable} font-roboto text-grayAccent antialiased`}
      >

        <WppModalProvider>
          <ModalProvider />
          <WppBtn />
        </WppModalProvider>
        {children}
      </body>
    </html>
  );
}

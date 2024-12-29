import Footer from "@/components/footer";
import HeaderNav from "@/components/header";
import WppBtn from "@/components/wpp-btn";
import { ModalProvider } from "@/components/wpp-modal";
import { WppModalProvider } from "@/contexts/wpp-modal-context";
import { Suspense } from "react";

export default function WInvestmentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <HeaderNav />
      </Suspense>
      <WppModalProvider>
        <ModalProvider />
        <WppBtn />
      </WppModalProvider>
      {children}
      <Footer />
    </>
  );
}

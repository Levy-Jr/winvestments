"use client"

import { createContext, useState } from "react"

type WppModalContextType = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WppModalContext = createContext<WppModalContextType | null>(null)

export const WppModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <WppModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </WppModalContext.Provider>
  )
}
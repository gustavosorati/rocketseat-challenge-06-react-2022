import { ReactNode, useState } from "react";
import { Navbar } from "../Navbar";
import { ModalSignIn } from "../ModalSignIn";
import { LayoutContainer } from "./styles";

interface Props {
  children: ReactNode
}
export default function Layout({ children }: Props) {

  return (
    <LayoutContainer>
      <Navbar />

      <div>
        {children}
      </div>

    </LayoutContainer>
  )
}
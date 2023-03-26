import { ReactNode, useState } from "react";
import { Navbar } from "../components/Navbar";
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
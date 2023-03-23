import { ChartLineUp, Binoculars } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { LinkContainer } from "./styles";

type Props = {
  href: string
  text: string
  icon: ReactNode
}

export function Link({text, href, icon}: Props) {
  const {pathname} = useRouter();

  return (
    <LinkContainer 
      href={href}
      active={pathname.includes(href)}  
    > 
      {icon}
      {text}
    </LinkContainer>
  )
}
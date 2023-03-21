import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { theme } from '@/styles/stitches.config';

import logoSvg from '../../aseets/logo.svg'
import { ChartLineUp, Binoculars, SignIn } from "@phosphor-icons/react";
import * as Styled from "./styles";

export function Navbar() {
  const router = useRouter()
  const { colors } = theme
  
  return (
    <Styled.Container>
      <Link href="/home" className="logo">
        <Image
          src={logoSvg}
          alt=""
          width={128}
        />
      </Link>

      <Styled.Link href="/home"
        active={router.pathname.includes('/home')}  
      >
        <ChartLineUp size={24} />
        Início
      </Styled.Link>

      <Styled.Link href="/explore" 
        active={router.pathname.includes('/explore')}
      >
        <Binoculars size={24} />
        Explorar
      </Styled.Link>

      <Styled.SignIn>
        Fazer Login
        <SignIn size={20} color={colors.green100.value} />
      </Styled.SignIn>
    </Styled.Container>
  )
}
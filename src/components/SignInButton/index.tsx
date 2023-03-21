import Image from "next/image";
import { ComponentProps } from "react";

import GoogleSvg from '../../aseets/icons/google.svg';
import * as Styled from "./styles";

type Props = ComponentProps<typeof Styled.Container> & {
  text: string
  imgsrc: string
}

export function SignInButton({ text, imgsrc, ...rest}: Props) {
  return (
    <Styled.Container {...rest}>
      <Image
        src={imgsrc}
        alt="google"
        width={32}
        height={32}
      />

      Entrar com {text}
    </Styled.Container>
  )
}
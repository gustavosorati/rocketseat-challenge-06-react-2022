import { theme } from "@/styles/stitches.config";
import { X } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";
import { SignInButton } from "../SignInButton";
import { Close, Modal, ModalContainer } from "./styles";
import { providerSchema } from "./utils/providers-schema";

type Props = {
  isActive: boolean
  setIsActive: (status: boolean) => void
}

export function ModalSignIn({isActive, setIsActive}: Props) {
  const { colors } = theme;

  async function handleSignIn(provider: string) {
    try {
      await signIn(provider);

      setIsActive(false);
    } catch(error) {
      console.log(error)
    }
  }

  if(!isActive) return null

  return (
    <ModalContainer>
      <Modal>
        <Close onClick={() => setIsActive(false)}>
          <X size={24} color={colors.gray400.value} />
        </Close>

        <strong>Faça login para deixar sua avaliação</strong>

        {providerSchema.map(provider => (
          <SignInButton 
            key={provider.id} 
            text={provider.text} 
            imgsrc={provider.icone} 
            onClick={() => handleSignIn(provider.name)}
          />
        ))}
      </Modal>
    </ModalContainer>
  )
}
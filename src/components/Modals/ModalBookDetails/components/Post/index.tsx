import { Avatar } from "@/components/Avatar";
import { Box } from "@/components/Box";
import { AvaliationStars } from "@/components/Generics/AvaliationStars";
import { SectionHeader } from "@/components/Generics/SectionHeader";
import { api } from "@/services/http";
import { theme } from "@/styles/stitches.config";
import { Check, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Profile, Title } from "../Ratings/styles";
import { AmountWords, Button, Footer, TextArea, TextContainer } from "./styles";

interface Props {
  name: string;
  avatar_url: string;
  uploadRating: (description: string) => void;
}

export function Post({name, avatar_url, uploadRating}: Props) {
  const { colors } = theme;
  const [description, setDescription] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmitReview() {
    setIsSending(true);
    uploadRating(description);
    
    setDescription('');
    setIsSending(false);
  }

  async function handleErase() {
    setDescription('');
  }

  return (
    <Box direction="column">
      <SectionHeader>
        <Profile>
          <Avatar 
            src={avatar_url}
            alt={name}
            width={40}
            height={40}
          />

          <Title>{name}</Title>
        </Profile>
      
        <AvaliationStars bookRating={0} size={24} />
      </SectionHeader>

      <TextContainer>
        <TextArea 
          maxLength={450} 
          rows={5}
          value={description}
          placeholder="Escreva sua avaliação"
          onChange={(textarea) => setDescription(textarea.target.value)}
        />

        <AmountWords>{description.length}/450</AmountWords>
      </TextContainer>
      
      <Footer>
        <Button type="button" onClick={handleErase}>
          <X size={24} color={colors.purple100.value} />
        </Button>

        <Button type="button" onClick={handleSubmitReview} disabled={isSending}>
          <Check size={24} color={colors.green100.value}  />
        </Button>
      </Footer>
    </Box>
  )
}
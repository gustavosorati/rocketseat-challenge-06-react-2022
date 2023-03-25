import { Star } from "@/components/Start";
import { theme } from "@/styles/stitches.config";
import { BookmarkSimple, BookOpen } from "@phosphor-icons/react";
import Image from "next/image";
import * as Styled from "./styles";


export function BookDetailsModal(){
  const {colors} = theme

  return(
    <Styled.BookContainer>
      <Styled.BookContent>
        <Styled.Header>
          <Image
            src={'/images/books/Book.png'}
            alt="teste"
            width={171}
            height={242}
          />

          <Styled.Details>
            <div>
              <Styled.Title>14 Hábitos de Desenvolvedores Altamente Produtivos</Styled.Title>
              <Styled.Escritor>Zeno Rocha</Styled.Escritor>
            </div>

            <div className="ratio-container">
              <Styled.Rate>
                {[...Array(5)].map((_, index) => {
                  return (
                    <Star 
                      key={index} 
                      color={index + 1 <= 4 && colors.purple100.value} 
                    />
                  )
                })}
              </Styled.Rate>
              <span>3 Avaliações</span>
            </div>
          </Styled.Details>
        </Styled.Header>

        <Styled.Footer>
          <Styled.InfoContainer>
            <BookmarkSimple size={40} color={colors.green100.value} />
            
            <div>
              <strong>Categoria</strong>
              <p>Computação, educação</p>
            </div>
          </Styled.InfoContainer>

          <Styled.InfoContainer>
            <BookOpen size={40} color={colors.green100.value} />            
            <div>
              <strong>Páginas</strong>
              <p>160</p>
            </div>
          </Styled.InfoContainer>
        </Styled.Footer>
      </Styled.BookContent>
    </Styled.BookContainer>
  )
}
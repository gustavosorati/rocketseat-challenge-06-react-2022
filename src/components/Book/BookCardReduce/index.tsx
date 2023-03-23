import { theme } from "@/styles/stitches.config";
import Image from 'next/image';

import { IBook } from '@/interface/IBooks';
import { Star } from '@/components/Start';
import { BookCardContainer, Content, Header, Rate } from "./styles";

type Props = {
  book: Omit<IBook, 'id'>
}

export function BookCardReduce({book}: Props) {
  const { colors } = theme;

  return (
    <BookCardContainer>
      <Image
        src={book.cover}
        alt={book.title}
        width={64}
        height={94}
        loading="lazy"
      />
      
       <Content>
        <Header>
          <h3>{book.title}</h3>
          <span>{book.author}</span>
        </Header>

        <Rate>
          {[...Array(5)].map((_, index) => {
            return (
              <Star 
                key={index} 
                color={index + 1 <= book.rating && colors.purple100.value} 
              />
            )
          })}
        </Rate>
      </Content>

    </BookCardContainer>
  )
}
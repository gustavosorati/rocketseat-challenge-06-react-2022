import Image from 'next/image';

import { IBook } from '@/interface/IBooks';

import { Box } from "@/components/Box";
import { AvaliationStars } from '@/components/Generics/AvaliationStars';

import * as S from './styles';

interface Props {
  book: (IBook & {
    rate: number;
  })
}

export function BookCard({book}: Props) {
  const book_image = book?.cover_url?.replace('public', '');

  return (
    <Box>

      <S.Avaliation>
        <AvaliationStars bookRating={book.rate} />
      </S.Avaliation>

      <Image
        src={book_image}
        alt={book.name}
        width={108}
        height={152}
        loading="lazy"
      />

      <S.Description>
        <S.PublishedAt>Há {book.created_at} dias</S.PublishedAt>

        <S.Title>{book.name}</S.Title>
        <S.Author>{book.author}</S.Author>

        <S.About>{book.summary}</S.About>
      </S.Description>
    </Box>
  )
}
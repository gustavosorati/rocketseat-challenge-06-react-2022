import { BookCard } from "@/components/Book/BookCard";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Header, ReadingContainer } from "./styles";

import imgTemp from '../../../../aseets/images/books/Book.png'
import { IBook } from "@/interface/IBooks";

type Props = {
  title: string
  urlReference?: string
  books: IBook[]
}

export function ReadingList({title, urlReference, books}: Props) {
  return (
    <ReadingContainer>
      <Header>
        <strong>{title}</strong>

        {urlReference && <Link href={urlReference}>
          Ver todos
          <CaretRight size={16} weight="fill" />
        </Link>}
      </Header>

      {books && books.map(book => (
        <BookCard
          key={book.id}
          title={book.title}
          cover={book.cover}
          author={book.author}
          publised_at={book.publised_at}
          description={book.description}
          rating={book.rating}
        />
      ))}
    </ReadingContainer>
  )
}
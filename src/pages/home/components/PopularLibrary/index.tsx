import { BookCard } from "@/components/Book/BookCard";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Header, LibraryContainer } from "./styles";

import imgTemp from '../../../../aseets/images/books/Book.png'
import { IBook } from "@/interface/IBooks";
import { BookCardReduce } from "@/components/Book/BookCardReduce";

type Props = {
  title: string
  urlReference?: string
  books: IBook[]
}

export function PopularLibrary({title, urlReference, books}: Props) {
  return (
    <LibraryContainer>
      <Header>
        <strong>{title}</strong>

        {urlReference && <Link href={urlReference}>
          Ver todos
          <CaretRight size={16} weight="fill" />
        </Link>}
      </Header>

      {books && books.map(book => (
        <BookCardReduce
          key={book.id}
          book={book}
        />
      ))}
    </LibraryContainer>
  )
}
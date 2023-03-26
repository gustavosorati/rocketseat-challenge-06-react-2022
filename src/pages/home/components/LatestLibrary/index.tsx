import { IUser } from "@/interface/IUser";
import { IBook, IBookRating } from "@/interface/IBooks";

import { BookCardWithPost } from "@/components/Book/BookCardWithPost";

import * as Styled from "./styles";

interface Props {
  title: string;
  reviews: {
    rating: IBookRating;
    book: IBook;
    user: IUser;
  }[]
}

export function LatestLibrary({title, reviews}: Props) {
  return (
    <Styled.LatestContainer>
      <Styled.Header>
        <strong>{title}</strong>
      </Styled.Header>

      {reviews && reviews.map(post => (
        <BookCardWithPost
          key={post.rating.id}
          book={post.book}
          user={post.user}
          rating={post.rating}
        />
      ))}
    </Styled.LatestContainer>
  )
}
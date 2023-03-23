import { Header, LatestContainer } from "./styles";

import { IPostPreview } from "@/interface/IPost";
import { BookCardWithPost } from "@/components/Book/BookCardWithPost";

type Props = {
  title: string
  publication: IPostPreview[]
}

export function LatestLibrary({title, publication}: Props) {
  return (
    <LatestContainer>
      <Header>
        <strong>{title}</strong>
      </Header>

      {publication && publication.map(post => (
        <BookCardWithPost
          key={post.id}
          publication={post}
        />
      ))}
    </LatestContainer>
  )
}
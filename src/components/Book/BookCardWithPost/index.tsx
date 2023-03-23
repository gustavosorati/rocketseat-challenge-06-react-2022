import { Avatar } from '../../Avatar'
import { theme } from "@/styles/stitches.config";
import Image from 'next/image';

import { About, Author, BookContainer, Content, Description, Header, Profile, PublishedAt, Rate, Title } from './styles';
import { Star } from '@/components/Start';
import { IPostPreview } from '@/interface/IPost';


interface Props {
  publication: Omit<IPostPreview, 'id'>
}

export function BookCardWithPost({publication}: Props) {
  const { colors } = theme;
  const { book, post } = publication;


  return (
    <BookContainer>
      <Header>
        <Profile>
          <Avatar 
            src={'/images/avatar/avatar.png'}
            alt={'Jaxson Dias'}
            width={40}
            height={40}
          />

          <div>
            <Title>{post.author}</Title>
            <PublishedAt>{post.publised_at}</PublishedAt>
          </div>
        </Profile>
      </Header>

      <Content>
        <Image
          src={book.cover}
          alt={book.title}
          width={108}
          height={152}
        />

        <Description>

          <Title>{book.title}</Title>
          <Author>{book.author}</Author>

          <About>{book.description}</About>
        </Description>
      </Content>

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
    </BookContainer>
  )
}
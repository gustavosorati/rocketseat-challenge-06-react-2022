import { Avatar } from '../../Avatar'
import { theme } from "@/styles/stitches.config";
import Image from 'next/image';

import { About, Author, BookContainer, Description, PublishedAt, Rate, Title } from './styles';
import { IBook } from '@/interface/IBooks';
import { Star } from '@/components/Start';

export function BookCard({title, author, cover, rating, description, publised_at}: Omit<IBook, 'id'>) {
  const { colors } = theme;

  return (
    <BookContainer>
      <Rate>
        {[...Array(5)].map((_, index) => {
          return (
            <Star 
              key={index} 
              color={index + 1 <= rating && colors.purple100.value} 
            />
          )
        })}
      </Rate>

      <Image
        src={cover}
        alt={title}
        width={108}
        height={152}
        loading="lazy"
      />

      <Description>
        <PublishedAt>Há {publised_at} dias</PublishedAt>

        <Title>{title}</Title>
        <Author>{author}</Author>

        <About>{description}</About>
      </Description>
    </BookContainer>
  )
}

{/* <div className="assessments">
          <Star size={14} weight="fill" color={colors.purple100.value} />
          <Star size={14} weight="fill" color={colors.purple100.value} />
          <Star size={14} weight="fill" color={colors.purple100.value}/>
          <Star size={14} weight="fill" color={colors.purple100.value}/>
          <Star size={14} color={colors.purple100.value} />
        </div> */}

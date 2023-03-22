import { Star } from '@phosphor-icons/react'
import { AvatarPicture } from '../Avatar'
import * as Styled from './styles'
import { theme } from "@/styles/stitches.config";
import Image from 'next/image';

import bookCoverImg from '../../aseets/images/books/Book.png'

export function Card() {
  const { colors } = theme;

  return (
    <Styled.Container>
      <Styled.Header>
        <div className="author">
          <AvatarPicture />
          
          <div>
            <h3>Jaxson Dias</h3>
            <span>Hoje</span>
          </div>
        </div>

        <div className="assessments">
          <Star size={14} weight="fill" color={colors.purple100.value} />
          <Star size={14} weight="fill" color={colors.purple100.value} />
          <Star size={14} weight="fill" color={colors.purple100.value}/>
          <Star size={14} weight="fill" color={colors.purple100.value}/>
          <Star size={14} color={colors.purple100.value} />
        </div>
      </Styled.Header>

      <Styled.Content>
        <Image
          src={bookCoverImg}
          alt=""
          width={108}
          height={152}
        />

        <div>
          <Styled.ContentHeader>
            <h3>Jaxson Dias</h3>
            <span>Hoje</span>
          </Styled.ContentHeader>

          <div className="description">
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget
          </div>
        </div>
      </Styled.Content>

    </Styled.Container>
  )
}
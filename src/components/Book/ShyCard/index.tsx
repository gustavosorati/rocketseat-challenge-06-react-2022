import { Star } from '@phosphor-icons/react'
import * as Styled from './styles'
import { theme } from "@/styles/stitches.config";
import Image from 'next/image';

import bookCoverImg from '../../../aseets/images/books/Book.png'

export function ShyCard() {
  const { colors } = theme;

  return (
    <Styled.Container>
      <Styled.Content>
        <Image
          src={bookCoverImg}
          alt=""
          width={64}
          height={94}
        />

        <div>
          <Styled.ContentHeader>
            <h3>A revolução dos bichos</h3>
            <span>George Orwell</span>
          </Styled.ContentHeader>
        </div>
      </Styled.Content>

    </Styled.Container>
  )
}
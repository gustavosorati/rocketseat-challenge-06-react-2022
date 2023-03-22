import Head from 'next/head'

import * as Styled from './styles'

import { Navbar } from '@/components/Navbar'
import { theme } from '@/styles/stitches.config';
import { ChartLine } from '@phosphor-icons/react';
import { Card } from '@/components/Card';
import Link from 'next/link';
import { ShyCard } from '@/components/Book/ShyCard';

export default function Home() {
  const { colors } = theme

  return (
    <>
      <Head>
        <title>Home | Book Wise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Styled.Container>
        <Navbar />

        <Styled.Content>
          <div className="header">
            <ChartLine size={32} color={colors.green100.value} />
            <h2>Início</h2>
          </div>

          <div className='sections'>
            <Styled.BooksContent>
              <h6>Avaliações mais recentes</h6>

              <Card />
              <Card />
              <Card />
            </Styled.BooksContent>

            <Styled.Aside>
              <div className="header">
                <h5>Livros populares</h5>

                <Link href="#">Ver todos</Link>
              </div>

              <ShyCard />

              <ShyCard />
              
              <ShyCard />
            </Styled.Aside>
          </div>
        </Styled.Content>

        
      </Styled.Container>
    </>
  )
}

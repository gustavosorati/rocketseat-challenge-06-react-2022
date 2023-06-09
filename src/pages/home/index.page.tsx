import Head from 'next/head'
import { ReactElement} from 'react';
import { NextPageWithLayout } from '../_app.page';

import DefaultLayout from '@/Layout';
import { LatestRead } from './components/LatestRead';
import { PopularBooks } from './components/PopularBooks';
import { LatestRatings } from './components/LatestRatings';

import { ChartLine } from '@phosphor-icons/react';

import * as S from './styles'
import { theme } from '@/styles/stitches.config';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home | Book Wise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Page */}        
      <S.Container>
          
        <S.Center>
          <LatestRead title="Sua última leitura" urlReference="/profile" />
          <LatestRatings title="Avaliações mais recentes"/>
        </S.Center>

        <S.Aside>
          <PopularBooks title="Livros populares" urlReference="/explore" />
        </S.Aside>

      </S.Container>
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  const { colors } = theme;

  return (
    <DefaultLayout 
      title='Inicio' 
      icon={<ChartLine size={32} color={colors.green100.value} />}
    >
      {page}
    </DefaultLayout>
  )
}

export default HomePage;
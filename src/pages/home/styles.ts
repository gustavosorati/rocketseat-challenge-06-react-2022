import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  flex: 1,
  height: '100%',
  display: "flex",
  gap: '40px',
})

export const Header = styled('header', {
  margin: '55px 0 40px 0',
  display: 'flex',
  alignItems: 'center',
  gap: "$3",

  'h1': {
    color: '$gray100'
  }
})

export const Center = styled('div', {
  flex: 1,
  width: '100%',
  display: "flex",
  flexDirection: "column",
  gap: '40px',
})

export const Aside = styled('aside', {
  width: '324px',
})
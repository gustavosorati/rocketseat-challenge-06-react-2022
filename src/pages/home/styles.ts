import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  maxWidth: '1440px',
  width: "100%",
  height: "100vh",
  margin: '0 auto',

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '6rem',
  padding: "20px"
})

export const Content = styled("section", {
  flex: 1,
  height: '100%',
  display: "flex",
  flexDirection: "column",
  padding: '55px 0',

  '> .header': {
    marginBottom: '$10',
    display: 'flex',
    alignItems: 'center',
    gap: "$3",

    'h2': {
      color: '$gray100'
    }
  },

  '.sections': {
    display: 'flex',
    gap: '64px'
  }
})

export const BooksContent = styled('div', {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",

  'h6': {
    fontWeight: 400,
    fontSize: "$sm"
  }
})

export const Aside = styled('aside', {
  height: '100%',
  width: '324px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.header': {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between"
  }
})
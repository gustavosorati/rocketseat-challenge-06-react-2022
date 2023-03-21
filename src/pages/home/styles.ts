import { styled } from "@/styles/stitches.config";


export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundColor: "$gray800",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '6rem',
  padding: "20px"
})

export const Content = styled("div", {
  background: 'red',
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  '.group': {
    display: "flex",
    flexDirection: "column",
    gap: '1rem',

    '.header': {
      marginBottom: '24px'
    }
  }, 
})
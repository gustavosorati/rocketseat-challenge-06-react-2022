import { styled } from "@/styles/stitches.config";

export const Container = styled("nav", {
  width: "232px",
  height: "calc(100%)",
  borderRadius: "12px",
  position: "static",
  left: 20,

  backgroundImage: 'url(/images/menu-bg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  padding: "40px 48px",
  display: "flex",
  flexDirection: "column",

  ".logo": {
    marginBottom: '3.75rem'
  }
})

export const Navigation = styled('div', {
  flex: 1,
})


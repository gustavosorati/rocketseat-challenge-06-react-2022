import { styled } from "@/styles/stitches.config";
import NextLink from "next/link";

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

export const Link = styled(NextLink, {
  display: "flex",
  alignItems: "center",
  gap: "12px",

  fontWeight: 700,
  fontSize: '1rem',
  color: '$gray100',

  marginBottom: '24px',
  position: 'relative',

  variants: {
    active: {
      true: {
        '&:before': {
          content: '',
          width: '4px',
          height: '24px',
          borderRadius: 999,
          background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
          position: 'absolute',
          top: '0',
          left: '-16px'
        }
      }
    }
  }
})

export const SignIn = styled('button', {
  all: 'unset',
  boxSizing: "border-box",
  cursor: 'pointer',
  marginTop: 'auto',

  display: 'flex',
  alignItems: "center",
  gap: '12px',
  
  color: "$gray200",
  fontWeight: 700
})
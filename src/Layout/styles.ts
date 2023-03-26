import { styled } from "@/styles/stitches.config";

export const LayoutContainer = styled("div", {
  width: "100%",
  padding: '20px',

  display: 'flex',
  gap: '40px',
  
  '> div': {
    flex: 1,
    maxWidth: '980px',
    height: '100%',
    margin: '0 auto',
  }
})
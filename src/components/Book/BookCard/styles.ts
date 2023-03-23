import { styled } from "@/styles/stitches.config";

export const BookContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$8',

  padding: '$6',
  borderRadius: '8px',
  backgroundColor: '$gray700',

  transition: 'all 200ms',
  cursor: 'pointer',
  position: 'relative',

  '&:hover': {
    backgroundColor: '$gray600',
  }
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const PublishedAt = styled('span', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray300',
  marginBottom: '$3'
})

export const Title = styled('h2', {
  fontSize: '$md',
  fontWeight: 700,
  color: '$gray100',
})

export const Author = styled('span', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray400',
  marginBottom: '$3'
})

export const About = styled('p', {
  marginTop: 'auto',
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray300'
})

export const Rate = styled('div', {
  position: 'absolute',
  top: '24px',
  right: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '$1'
})
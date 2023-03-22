import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
  width: '100%',
  height: '130px',
  borderRadius: '8px',
  padding: '$5',
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8'
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '20px',

  '.description': {
    fontSize: '$xs',
    fontWeight: 400,
    color: '$gray300',
    lineHeight: '160%'
  }
})

export const ContentHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.5rem',

  'h3': {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray100'
  },

  'span': {
    fontSize: '$sm',
    fontWeight: 400,
    color: '$gray400'
  },
})
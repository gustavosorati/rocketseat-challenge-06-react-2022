import { styled } from "@/styles/stitches.config";

export const BookContainer = styled('div', {
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',
  
  position: 'absolute',
  top: 0,
  right: 0,
  
  width: '660px',
  height: '100vh',
  padding: '64px 48px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10'
})

export const BookContent = styled('div', {
  width: '100%',
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 32px',
  borderRadius: '10px'
})

export const Header = styled('div', {
  display: 'flex',
  gap: '32px',
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  '.ratio-container': {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    'span': {
      fontSize: '$xs',
      color: '$gray400',
    }
  }
})


export const Footer = styled('div', {
  borderTop: '1px solid #252D4A',
  marginTop: '$10',
  padding: '24px 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '52px'
})

export const Title = styled('h2', {
  fontSize: '$md',
  color: '$gray100',
  marginBottom: '4px'
})

export const Escritor = styled('span', {
  fontSize: '$sm',
  color: '$gray300',
  marginBottom: '4px',  
})

export const Rate = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1'
})

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  'div': {
    width: '100%',
    margin: '0 auto',
  },

  'strong': {
    color: '$gray200',
    fontSize: '$md',
    marginBottom: '812px'
  },

  'p': {
    color: '$gray300',
    fontSize: '$sm',
    marginTop: '4px'
  }
})
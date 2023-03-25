import { styled } from "@/styles/stitches.config";


export const ModalContainer = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'rgba(0,0,0,.6)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999
})

export const Modal = styled('div', {
  backgroundColor: '$gray700',
  width: '516px',
  borderRadius: '12px',
  padding: '56px 72px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  position: 'relative',

  'strong': {
    marginBottom: '24px'
  }
})

export const Close = styled('div', {
  all: 'unset',
  boxSizing: 'border-box',

  position: 'absolute',
  top: '16px',
  right: '16px',

  cursor: 'pointer',
})
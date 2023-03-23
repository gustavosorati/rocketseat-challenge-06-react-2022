import { styled } from "@/styles/stitches.config"

export const Container = styled("div", {
  flex: 1,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  marginBottom: '48px'
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

export const FiltersContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  marginBottom: '48px'
})

export const Filter = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  borderRadius: 999,
  border: '1.5px solid $purple100',
  color: '$purple100',
  padding: '4px 16px',
  
  cursor: 'pointer',
  transition: 'all 200ms',

  '&:hover': {
    backgroundColor: '$purple200',
    borderColor: '$purple200',
    color: '$gray100'
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$purple200',
        borderColor: '$purple200',
        color: '$gray100'
      },
      false: {
        backgroundColor: 'transparent'
      }
    }
  }
})

export const ExplorerBooks = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px'
})
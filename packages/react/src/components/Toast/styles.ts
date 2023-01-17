import * as RadixToast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const Viewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  boxSizing: 'border-box',
})

export const Root = styled(RadixToast.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  borderRadius: '$sm',

  fontFamily: '$default',
  lineHeight: '$base',

  padding: '$3 $5',

  position: 'relative',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const Title = styled(RadixToast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
})

export const Description = styled(RadixToast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

export const Close = styled(RadixToast.Close, {
  background: 'transparent',
  lineHeight: 0,
  border: 0,

  cursor: 'pointer',

  svg: {
    color: '$gray200',
    fontSize: '$xs',
  },
})

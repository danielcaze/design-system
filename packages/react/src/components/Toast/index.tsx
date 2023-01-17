import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Close, Description, Title, Root, Viewport } from './styles'

export interface ToastProps extends ComponentProps<typeof Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <Root {...props}>
        <header>
          <Title>{title}</Title>
          <Close>
            <X weight="light" />
          </Close>
        </header>
        {!!description && <Description>{description}</Description>}
      </Root>
      <Viewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'

import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@danielcaze-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'

function DemoToast(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function toggleToast(isOpen: boolean) {
    setOpen(isOpen)
  }

  function onToastOpen() {
    toggleToast(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      toggleToast(true)
    }, 100)
  }

  return (
    <div>
      <Button onClick={onToastOpen}>Schedule</Button>
      <Toast open={open} onOpenChange={toggleToast} {...props} />
    </div>
  )
}

export default {
  title: 'Pop ups/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de outubro as 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}

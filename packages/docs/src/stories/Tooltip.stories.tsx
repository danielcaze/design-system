import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@danielcaze-ignite-ui/react'

export default {
  title: 'Pop ups/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'October 21st - Unavaiable',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}

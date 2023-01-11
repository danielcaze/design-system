import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod neque delectus unde exercitationem ullam enim beatae quidem, blanditiis eaque explicabo voluptatibus fuga dolorem deleniti rerum dolore? Voluptatem, at odio.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {},
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomInput } from './CustomInput';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: CustomInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomInput> = (args) => <CustomInput {...args} />;

export const Primary = Template.bind({});



// More on args: https://storybook.js.org/docs/react/writing-stories/args

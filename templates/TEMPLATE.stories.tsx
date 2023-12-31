import { StoryFn } from '@storybook/react';
import TEMPLATE, { TEMPLATEProps } from './TEMPLATE';

export default {
  title: 'UI component/TEMPLATE',
  component: TEMPLATE,
};

const Template: StoryFn<TEMPLATEProps> = (args) => <TEMPLATE {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'TEMPLATE';

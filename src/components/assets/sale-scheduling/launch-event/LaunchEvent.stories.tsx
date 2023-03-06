import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../../../../styles/metacomic-theme.css';
import 'metacomicicons/fonts/metacomic.css';
import { LaunchEvent } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'assets/sale-scheduling/launch-event',
  component: LaunchEvent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LaunchEvent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LaunchEvent> = () => <LaunchEvent />;

export const Form = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

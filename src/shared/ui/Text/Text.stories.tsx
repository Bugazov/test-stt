import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title Lorem Ipsum',

};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title Lorem Ipsum',

};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text',
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
    size: TextSize.L,
};

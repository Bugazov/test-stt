import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'EDSDSDS',
        user: { id: '1', username: 'islam' },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'EDSDSDS',
        user: { id: '1', username: 'islam' },
    },
    isLoading: true,
};

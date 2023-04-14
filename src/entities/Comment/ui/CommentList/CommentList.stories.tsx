import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'EDSDSDS',
            user: { id: '1', username: 'islam' },
        },
        {
            id: '2',
            text: 'EDSDSDS',
            user: { id: '1', username: 'jjjjj' },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [
    ],
    isLoading: true,
};

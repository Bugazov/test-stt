import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommedationList } from './ArticleRecommedationList';

export default {
    title: 'features/ArticleRecommedationList',
    component: ArticleRecommedationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommedationList>;

const Template: ComponentStory<typeof ArticleRecommedationList> = (args) => <ArticleRecommedationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
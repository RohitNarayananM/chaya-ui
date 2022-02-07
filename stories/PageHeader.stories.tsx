import React from 'react';

import { Meta, Story } from '@storybook/react';
import { PageHeader } from '../src';
import ThemeContext from "../src/ThemeProvider";

const meta: Meta = {
    title: 'Page Header',
    component: PageHeader,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => (
    <ThemeContext>
        <PageHeader {...args} />
    </ThemeContext>
);

export const Default = Template.bind({});

Default.args = {
    title: 'Hello World!',
    description: 'This is a description',
    breadcrumbItems: [
        {
            title: 'Challenges',
            link: '#/challenges',
        },
        {
            title: 'Web',
            link: '#/challenges/web',
        }
    ]
};


import React, {useState} from 'react'
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import Select from './Select';

export default {
    title: 'Select stories',
    component: Select
}

const Template: Story<any> = (args) => <Select {...args}/>

const callback = (value: any) => {
}
const selectItems = [
    {id: 1, value: 'asd'},
    {id: 2, value: 'frrt'},
    {id: 3, value: 'agtyhsd'},
    {id: 4, value: 'a56sd'},
]

export const SelectStory = Template.bind({})
SelectStory.args = {
    value: 'Initial value',
    onChange: callback,
    items: selectItems
}

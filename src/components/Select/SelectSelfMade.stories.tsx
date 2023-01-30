import React, {useState} from 'react'
import {Story} from '@storybook/react';
import SelectSelfMade from './SelectSelfMade';

export default {
    title: 'SelectSelfMade stories',
    component: SelectSelfMade
}

const Template: Story<any> = (args) => <SelectSelfMade {...args}/>

const selectItems = [
    {id: 1, value: 'Value 1'},
    {id: 2, value: 'Value 2'},
    {id: 3, value: 'Value 3'},
    {id: 4, value: 'Value 4'},
]

export const SelectStoryWithoutValue = Template.bind({})
SelectStoryWithoutValue.args = {
    items: selectItems
}

export const SelectStoryWithValue = () => {
    const [value, setValue] = useState<string>("Value 1")
    return <>
        <SelectSelfMade onChange={setValue}
                        value={value}
                        items={selectItems}
        />
    </>
}
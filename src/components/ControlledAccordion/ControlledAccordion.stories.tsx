import React, {useState} from 'react'
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion stories',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const collapsedControlledAccordion_withTemplate = Template.bind({})
collapsedControlledAccordion_withTemplate.args = {
    titleValue: 'Collapsed Accordion',
    accordionCollapsed: true,
    onTitleClick: action('Clicked to expand'),
    color: "red",
    items:[]
}

export const collapsedControlledAccordion = () => {
    return <Accordion
        titleValue={'Collapsed Accordion'}
        accordionCollapsed={true}
        onTitleClick={action('Clicked to expand')}
        items={[]}
        onItemClick={onItemClick}
    />
};
const accordionItems = [
    {id:1, value:"asd"},
    {id:2, value:"frrt"},
    {id:3, value:"agtyhsd"},
    {id:4, value:"a56sd"},
]

const onItemClick = (id:number) => {
    alert(`you clicked on #${id} item`)
};

export const expandedControlledAccordion = () => {
    return <Accordion
        titleValue={'Expanded Accordion'}
        accordionCollapsed={false}
        onTitleClick={action('Clicked to collapse')}
        items={accordionItems}
        onItemClick={onItemClick}
    />
};

export const ControlledAccordionChanging = () => {
    const [value, setValue] = useState(true)

    return <Accordion
        titleValue={'Accordion changing'}
        accordionCollapsed={value}
        onTitleClick={() => setValue(!value)}
        items={accordionItems}
        onItemClick={onItemClick}
    />
};
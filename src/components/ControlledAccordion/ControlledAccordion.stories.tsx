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
    onClick: action('Clicked to expand'),
    color: "red"
}

export const collapsedControlledAccordion = () => {
    return <Accordion
        titleValue={'Collapsed Accordion'}
        accordionCollapsed={true}
        onClick={action('Clicked to expand')}
    />
};

export const expandedControlledAccordion = () => {
    return <Accordion
        titleValue={'Expanded Accordion'}
        accordionCollapsed={false}
        onClick={action('Clicked to collapse')}
    />
};

export const ControlledAccordionChanging = () => {
    const [value, setValue] = useState(true)

    return <Accordion
        titleValue={'Accordion changing'}
        accordionCollapsed={value}
        onClick={() => setValue(!value)}
    />
};
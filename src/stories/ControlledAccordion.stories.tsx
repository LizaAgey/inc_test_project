import React, {useState} from 'react'
import {action} from '@storybook/addon-actions';
import {Accordion} from '../components/ControlledAccordion/Accordion';

export default {
    title: "Accordion stories",
    component: Accordion
}

export const collapsedControlledAccordion = () => {
 return <Accordion
        titleValue={"Collapsed Accordion"}
        accordionCollapsed={true}
        onClick={action("Clicked to expand")}
 />
};

export const expandedControlledAccordion = () => {
    return <Accordion
        titleValue={"Expanded Accordion"}
        accordionCollapsed={false}
        onClick={action("Clicked to collapse")}
    />
};

export const ControlledAccordionChanging = () => {
    const [value, setValue] = useState(true)

    return <Accordion
        titleValue={"Accordion changing"}
        accordionCollapsed={value}
        onClick={()=>setValue(!value)}
    />
};
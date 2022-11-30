import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onClick: (accordionCollapsed: boolean)=>void
}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}

function Accordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={()=>props.onClick(!props.accordionCollapsed)}
                        />
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody is rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion
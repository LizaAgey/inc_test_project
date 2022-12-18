import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    /**
     * Received mode for accordion
     */
    accordionCollapsed: boolean
    onClick: ()=>void
    color?:string
}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
    color?: string
}

export function Accordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onClick}
                        color={props.color ? props.color : "black"}
                        />
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return (
        <h3
            onClick={(e)=>props.onClick()}
        style={{color:props.color}}
        >{props.title}</h3>
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


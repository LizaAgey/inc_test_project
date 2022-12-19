import React from 'react';
//--------------------------------------------ACCORDION------------

export type ItemsType = {
    id: number
    value: any
}
export type AccordionPropsType = {
    items: Array<ItemsType>
    titleValue: string
    /**
     * Received mode for accordion
     */
    accordionCollapsed: boolean
    onTitleClick: () => void
    color?: string
    onItemClick: (id: number) => void
}

export function Accordion(props: AccordionPropsType) {


    console.log('Accordion is rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onTitleClick}
                        color={props.color ? props.color : 'black'}
        />
        {!props.accordionCollapsed && <AccordionBody
            items={props.items}
            onClick={props.onItemClick}
        />}
    </div>
}

//--------------------------------------------TITLE------------
type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return (
        <h3
            onClick={(e) => props.onClick()}
            style={{color: props.color}}
        >{props.title}</h3>
    )
}

//--------------------------------------------BODY------------

type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (id: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody is rendering')
    return (
        <ul>
            {props.items.map(item => <li
                key={item.id}
                onClick={() => props.onClick(item.id)}
            >
                {item.value}
            </li>)}
        </ul>
    )
}


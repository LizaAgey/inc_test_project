import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion is rendering")
    const [isCollapsed, setIsCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={()=>setIsCollapsed(!isCollapsed)}
                        />

        {!isCollapsed && <AccordionBody/>}
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

export default UncontrolledAccordion
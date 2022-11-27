import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState(true)

    console.log("Accordion is rendering")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={()=> {setIsCollapsed(!isCollapsed)}}>toggle</button>

        {/*instead of if..else-statement*/}
        {!isCollapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return (
        <h3>{props.title}</h3>
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
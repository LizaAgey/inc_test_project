import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState(true)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    };

    console.log("UncontrolledAccordion is rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={()=>setIsCollapsed(!isCollapsed)}
                        />

        {/*instead of if..else-statement*/}
        {!isCollapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
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
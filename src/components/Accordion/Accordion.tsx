import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState(true)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    };

    console.log("Accordion is rendering")
    return <div>
        <AccordionTitle title={props.titleValue} callback={onClickHandler}/>

        {/*instead of if..else-statement*/}
        {!isCollapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    callback: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return (
        <h3 onClick={props.callback}>{props.title}</h3>
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
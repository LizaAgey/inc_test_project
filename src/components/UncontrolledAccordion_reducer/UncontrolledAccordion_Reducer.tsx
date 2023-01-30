import React, {useReducer} from 'react';
import {reducer} from './Reducer';


type UncontrolledAccordion_Reducer_PropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function UncontrolledAccordion_Reducer(props: UncontrolledAccordion_Reducer_PropsType) {
    console.log('UncontrolledAccordion is rendering')
    // const [isCollapsed, setIsCollapsed] = useState(true)
    const [isCollapsed, dispatch] = useReducer(reducer, false)

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={() => dispatch({type: 'CHANGE_COLLAPSED_MODE'})}
        />

        {!isCollapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion_Reducer
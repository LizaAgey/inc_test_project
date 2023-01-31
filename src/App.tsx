import React, {useState} from 'react';
import './App.css';
import {UncontrolledSwitcher} from './components/UncontrolledSwitcher/UncontrolledSwitcher';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/ControlledRating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/ControlledAccordion/Accordion';
import {ControlledSwitcher} from './components/ControlledSwitcher/ControlledSwitcher';

export type FilterValueType = 'all' | 'Dollars' | 'RUBLS'
// type PageTitlePropsType = {
//     title: string
// }


// function PageTitle(props: PageTitlePropsType) {
//     return (
//         <h1>
//             {props.title}
//         </h1>
//     )
// }

// function hello() {
//     debugger
//     alert("hello")
// }

// hello()

function App() {
    console.log('App is rendering')
    // IMPORTANT! ----- each time any state is changed >> App is rerendered

    //
    // const button1Foo = () => {
    //     console.log("1foo")
    // };
    //
    // const button2Foo = () => {
    //     console.log("foo2")
    // };
    // let [a, setA] = React.useState(1)
    //
    // const onClickHandlerPlus = () => {
    //     setA(++a)
    // };
    //
    // const onClickHandlerMinus = () => {
    //  setA(0)
    // };


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsedState] = useState<boolean>(false)
    const [switcherTurned, setSwitcherTurned] = useState(false)

    return (
        <div>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            {/*<UncontrolledRating/>*/}

            {/*<Accordion*/}
            {/*    titleValue={'Menu Controlled'}*/}
            {/*    accordionCollapsed= {accordionCollapsed}*/}
            {/*    onTitleClick= {()=>setAccordionCollapsedState(!accordionCollapsed)}*/}
            {/*/>*/}
            <UncontrolledAccordion
                titleValue={'Menu Uncontrolled'}
            />

            {/*<ControlledSwitcher*/}
            {/*    switcherTurned={switcherTurned}*/}
            {/*    setSwitcherTurned={setSwitcherTurned}*/}
            {/*/>*/}
            <UncontrolledSwitcher
            onChange = {setSwitcherTurned}
            />
            {switcherTurned.toString()}


            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandlerPlus}>+1</button>*/}
            {/*<button onClick={onClickHandlerMinus}>0</button>*/}
            {/*<Button name={"Btn1"} callBack={button1Foo}/>*/}
            {/*<Button name={"Btn2"} callBack={button2Foo}/>*/}

       </div>
    );
}

export default App;

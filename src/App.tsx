import React, {useState} from 'react';
import './App.css';
import {UncontrolledSwitcher} from './components/UncontrolledSwitcher/UncontrolledSwitcher';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/ControlledRating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/ControlledAccordion/Accordion';
import {ControlledSwitcher} from './components/ControlledSwitcher/ControlledSwitcher';

export type FilterValueType = 'all' | 'Dollars' | 'RUBLS'
// type PageTitlePropsType = {
//     title: string
// }

// let topCarsArray = [
//     {company: "a", model: "10"},
//     {company: "b", model: "20"},
//     {company: "c", model: "30"}
// ]

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
    // const [money, setMoney] = React.useState([
    //     {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    // ])
    // let currentMoney = money
    //
    // const [filterValue, setFilterValue] = React.useState<FilterValueType>("all")
    //
    //
    // const onClickFilterHandler = (currency: FilterValueType) => {
    //     setFilterValue(currency)
    // };
    // if (filterValue === 'Dollars') {
    //     currentMoney = currentMoney.filter((initialElement, index) => initialElement.banknotes === "Dollars")
    // }
    //
    // if (filterValue === 'RUBLS') {
    //     currentMoney = currentMoney.filter((initialElement, index) => initialElement.banknotes === "RUBLS")
    //
    // }
    // if (filterValue !== "all") {
    //     currentMoney = currentMoney.filter((initialElement) => initialElement.banknotes === filterValue)
    // }

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionIsCollapsed, setAccordionIsCollapsedState] = useState<boolean>(false)
    const [switcherTurned, setSwitcherTurned] = useState(false)

    return (
        <div>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            <UncontrolledRating/>

            <Accordion
                titleValue={'Menu Controlled'}
                accordionCollapsed= {accordionIsCollapsed}
                onClick = {setAccordionIsCollapsedState}
            />
            <UncontrolledAccordion
                titleValue={'Menu Uncontrolled'}
            />

            <ControlledSwitcher
                switcherTurned={switcherTurned}
                setSwitcherTurned={setSwitcherTurned}
            />
            <UncontrolledSwitcher/>

            {/*<UseState*/}
            {/*currentMoney={currentMoney}*/}
            {/*onClickFilterHandler={onClickFilterHandler}*/}
            {/*/>*/}

            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandlerPlus}>+1</button>*/}
            {/*<button onClick={onClickHandlerMinus}>0</button>*/}
            {/*<Button name={"Btn1"} callBack={button1Foo}/>*/}
            {/*<Button name={"Btn2"} callBack={button2Foo}/>*/}

            {/*<Students*/}
            {/*infoStudents ={[*/}
            {/*    {id:"a", name:"a",age:30},*/}
            {/*    {id:"b", name:"a",age:30},*/}
            {/*    {id:"c", name:"a",age:30},*/}
            {/*    {id:"d", name:"a",age:30},*/}
            {/*]}/>*/}

            {/*<Cars carsInfo = {topCarsArray}/>*/}
        </div>
    );
}

export default App;

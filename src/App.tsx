import React, {MouseEvent} from 'react';
import './App.css';
import Switcher from "./components/OnOff/Switcher";
// import UseState from "./components/UseState";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
// import Students from "./components/Students/Students";
// import Cars from "./components/Cars/Cars";
// import Button from "./components/Button/Button";

//
// let topCarsArray = [
//     {company: "a", model: "10"},
//     {company: "b", model: "20"},
//     {company: "c", model: "30"}
// ]
//


export type FilterValueType = "all" | "Dollars" | 'RUBLS'


function App() {
    console.log("App is rendering")
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

    return (
        <div>

            <Switcher/>
            <Switcher/>
            {/*<Switcher isTurned={false}/>*/}

            {/*<UseState*/}
            {/*currentMoney={currentMoney}*/}
            {/*onClickFilterHandler={onClickFilterHandler}*/}
            {/*/>*/}

            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandlerPlus}>+1</button>*/}
            {/*<button onClick={onClickHandlerMinus}>0</button>*/}


            {/*<Button name={"Btn1"} callBack={button1Foo}/>*/}
            {/*<Button name={"Btn2"} callBack={button2Foo}/>*/}


            {/*Article 1*/}
            <Accordion
                titleValue={"Menu"}
            />
            <Accordion
                titleValue={"Users"}
            />
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return (
//         <h1>
//             {props.title}
//         </h1>
//     )
// }
//
//
// function hello() {
//     debugger
//     alert("hello")
// }

// hello()


export default App;

import React, {MouseEvent} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Students from "./components/Students/Students";
import Cars from "./components/Cars/Cars";


let topCarsArray = [
    {company: "a", model: "1"},
    {company: "b", model: "2"},
    {company: "c", model: "3"}
]

function App() {
    console.log("App is rendering")

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert("user1")
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert("user2")
    // }

    return (
        <div>
            <button onClick={myFirstSubscriber}>MyButton-1            </button>
            <button onClick={mySecondSubscriber}>MyButton-2            </button>


            {/*<PageTitle title={"This is App component"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={2}/>*/}
            {/*<Accordion*/}
            {/*    titleValue={"Menu"}*/}
            {/*    collapsed={true}*/}
            {/*/>*/}
            {/*Article 2*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion*/}
            {/*    titleValue={"Users"}*/}
            {/*    collapsed={false}*/}
            {/*/>*/}

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

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}


function hello() {
    debugger
    alert("hello")
}

// hello()


export default App;

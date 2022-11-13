import React, {MouseEvent} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Students from "./components/Students/Students";
import Cars from "./components/Cars/Cars";
import Button from "./components/Button";


let topCarsArray = [
    {company: "a", model: "10"},
    {company: "b", model: "20"},
    {company: "c", model: "30"}
]

function App() {
    console.log("App is rendering")

    const button1Foo = () => {
        console.log("1foo")
    };
    
    const button2Foo = () => {
        console.log("foo2")
    };
    const button3Foo = () => { 
     return ;
    };

    return (
        <div>

          <Button name={"Btn1"} callBack={button1Foo}/>
          <Button name={"Btn2"} callBack={button2Foo}/>
          <Button name={"StupidBtn"} callBack={button2Foo}/>

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

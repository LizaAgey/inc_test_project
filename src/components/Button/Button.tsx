import React from 'react';

type ButtonType = {
    name: string,
    callBack: () => void
}

const Button: React.FC<ButtonType> = (props) => {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert("user1")
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert("user2")
    // }

    // const onClickHandler = (_: MouseEvent) => {
    //     let userName: string | null = prompt()
    //     userName = userName ? userName : "Nobody"
    //
    //     console.log("Hello " +  userName )
    // };

    // const foo1 = (_:any) => {
    //     console.log("100200")
    // };
    //
    // const foo2 = (value:number) => {
    //     console.log(value)
    // };

    const onClickHandler = () => {
        props.callBack()
    };

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    )

    {/*<button onClick={foo1}>1</button>*/
    }
    {/*<button onClick={()=>foo2(100300)}>2</button>*/
    }
}

export default Button;
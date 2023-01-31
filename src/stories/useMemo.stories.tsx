import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)


    let resultB = 1
    let resultA = 1

    resultA =  useMemo(()=> {
        let tempResult = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake<50000000) {
                fake++
                const fakeA = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    },[a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </>
}

const UsersPresentationalComponent = (props: { users: Array<string> }) => {
    console.log("Users from presentational component are re-rendered")
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
};

const UsersMemoComponent = React.memo(UsersPresentationalComponent)

export const useMemoHelpsReactMemo = () => {
    console.log("help example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['d', 'f', 'g',"a"])

    //filter создает новый массив каждый раз и вызывает перерисовку
    // const newArray = users.filter(user => user.toLowerCase().indexOf("a") > -1)

    //перерисовать компоненту, когда поменяется первоначальный массив
    const newArray = useMemo(()=> users.filter(user => user.toLowerCase().indexOf("a") > -1), [users])

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+ 1</button>
        {counter}
        <UsersMemoComponent users={newArray}/>
        <button onClick={()=>setUsers([...users, ("New user A " + new Date().getTime())])}>Add user</button>

    </>
};
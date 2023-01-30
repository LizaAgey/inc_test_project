import React, {useState} from 'react';

export default {
    title: 'React Memo'
}

const NewMessagesCounterPresentationalComponent = (props: any) => {
    console.log("Counter is re-rendered")
    return <div>{props.count}</div>
};

const NewMessagesCounterMemoComponent = React.memo(NewMessagesCounterPresentationalComponent)

const UsersPresentationalComponent = (props: { users: Array<string> }) => {
    console.log("Users from presentational component are re-rendered")
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
};

const UsersMemoComponent = React.memo(UsersPresentationalComponent)

export const MemoExample_1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['d', 'f', 'g'])

    return <>
        <button onClick={()=>setCounter(counter + 1)}>Increase number</button>
        <NewMessagesCounterMemoComponent count={counter}/>
        <button onClick={()=>setUsers([...users, ("New user " + new Date().getTime())])}>Add user</button>
        <UsersMemoComponent users={users}/>

    </>
};
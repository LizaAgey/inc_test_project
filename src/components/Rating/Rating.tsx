import React, {useState} from 'react';

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log('Rating is rendering')

    const [value, setValue] = useState(0)

    const onClickHandler = (value: number) => {
        setValue(value)
    };

    return <div>
        <Star selected={value > 0} callback={onClickHandler} value={1}/>
        <Star selected={value > 1} callback={onClickHandler} value={2}/>
        <Star selected={value > 2} callback={onClickHandler} value={3}/>
        <Star selected={value > 3} callback={onClickHandler} value={4}/>
        <Star selected={value > 4} callback={onClickHandler} value={5}/>
    </div>

}

type StartPropsType = {
    selected: boolean,
    callback: (value: number) => void,
    value: number
}


function Star(props: StartPropsType) {
    console.log('Star is rendering')
    return props.selected
        ? (<span onClick={() => props.callback(props.value)}><b>Star </b></span>)
        : (<span onClick={() => props.callback(props.value)}>Star </span>)
}
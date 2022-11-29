import React, {useState} from 'react';

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}
type StartPropsType = {
    selected: boolean,
    setValue: (value: number) => void,
    value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating is rendering')

    const [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
    </div>

}


function Star(props: StartPropsType) {
    console.log('Star is rendering')
    return (
        <span onClick={() => props.setValue(props.value)}>
            {props.selected ? (<b>Star </b>) : 'Star'}
        </span>
    )
}
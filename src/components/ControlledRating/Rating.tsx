import React, {useState} from 'react';

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    onClick: (rating: RatingValueType) =>void
}
type StartPropsType = {
    selected: boolean,
    value: RatingValueType
    onClick: (rating: RatingValueType) =>void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating is rendering')

    return <div>
        <Star selected={props.value > 0} value={1} onClick={props.onClick}/>
        <Star selected={props.value > 1} value={2} onClick={props.onClick}/>
        <Star selected={props.value > 2} value={3} onClick={props.onClick}/>
        <Star selected={props.value > 3} value={4} onClick={props.onClick}/>
        <Star selected={props.value > 4} value={5} onClick={props.onClick}/>
    </div>
}

function Star(props: StartPropsType) {
    console.log('Star is rendering')
    return (
        <span onClick={()=>props.onClick(props.value)}>
            {props.selected ? (<b>Star </b>) : 'Star'}
        </span>
    )
}
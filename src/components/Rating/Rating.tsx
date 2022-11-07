import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log("Rating is rendering")

    if (props.value === 2) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    }

    return <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>

}

type StartPropsType = {
    selected: boolean
}


function Star(props: StartPropsType) {
    console.log("Star is rendering")
    return props.selected ? (<span><b>Star </b></span>) : (<span>Star </span>)
}
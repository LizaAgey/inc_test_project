import React, {useState} from 'react'
import {Rating, RatingValueType} from '../components/ControlledRating/Rating';

export default {
    title: "Rating stories",
    component: Rating
}

export const Rating_0 = () => <Rating value={0} onClick={(a)=>{}}/>;
export const Rating_1 = () => <Rating value={1} onClick={(a)=>{}}/>;
export const Rating_2 = () => <Rating value={2} onClick={(a)=>{}}/>;
export const Rating_3 = () => <Rating value={3} onClick={(a)=>{}}/>;
export const Rating_4 = () => <Rating value={4} onClick={(a)=>{}}/>;
export const Rating_5 = () => <Rating value={5} onClick={(a)=>{}}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState <RatingValueType>(5)
    return<Rating value={rating} onClick={setRating}/>
};
import React from 'react'
import Cars from '../components/Cars/Cars';

export default {
    title: "Cars stories",
    component: Cars
}

export const CarsStory = () => {
    let catsInfo = [{
        company:"A",
        model:"1"
    },{
        company:"B",
        model:"2"
    },{
        company:"C",
        model:"3"
    }]
    return <Cars
        carsInfo={catsInfo}
    />
};
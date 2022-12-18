import React from 'react'
import {action} from '@storybook/addon-actions';
import {Button} from '../components/Button/Button';


export default {
    title: "Button stories",
    component: Button
}

export const ButtonStory = () => {
    return <Button
        name={"Button"}
        callBack={action("Button is clicked")}
    />
};
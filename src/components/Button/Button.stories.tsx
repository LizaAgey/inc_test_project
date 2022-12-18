import React from 'react'
import {action} from '@storybook/addon-actions';
import {Button, ButtonType} from './Button';
import {Story} from '@storybook/react';

export default {
    title: "Button stories",
    component: Button
}

export const ButtonStory= () => {
    return <Button
        name={"Button"}
        callBack={action("Button is clicked")}
    />
};

const Template: Story<ButtonType> = (args) => <Button {...args}/>

export const ButtonStory_2 = Template.bind({})
ButtonStory_2.args = {
    name:"Button",
    callBack:action("Button is clicked")
}
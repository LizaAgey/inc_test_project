import React, {useState} from 'react'
import {UncontrolledSwitcher} from './UncontrolledSwitcher';
import {action} from '@storybook/addon-actions';


export default {
    title: "Switcher stories",
    component: UncontrolledSwitcher
}

export const UncontrolledSwitcherOnStory = () => {
    const [switcherTurned, setSwitcherTurned] = useState(false)
    return <UncontrolledSwitcher defaultValue={true} onChange={setSwitcherTurned}/>
};
export const UncontrolledSwitcherOffStory = () => {
    const [switcherTurned, setSwitcherTurned] = useState(false)
    return <UncontrolledSwitcher defaultValue={false} onChange={setSwitcherTurned}/>
};

export const UncontrolledSwitcherStory = () => {
    const callback = action("pressed to switch")
    return <UncontrolledSwitcher defaultValue={false} onChange={callback}/>
};
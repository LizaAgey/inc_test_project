import React, {useState} from 'react'
import {UncontrolledSwitcher} from '../components/UncontrolledSwitcher/UncontrolledSwitcher';


export default {
    title: "Switcher stories",
    component: UncontrolledSwitcher
}

export const UncontrolledSwitcherStory = () => {
    const [switcherTurned, setSwitcherTurned] = useState(false)
    return <UncontrolledSwitcher onChange={setSwitcherTurned}/>
};
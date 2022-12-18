import React, {useState} from 'react'
import {ControlledSwitcher} from './ControlledSwitcher';
import {action} from '@storybook/addon-actions';

export default {
    title: "Switcher stories",
    component: ControlledSwitcher
}

export const SwitcherOn = () => <ControlledSwitcher
setSwitcherTurned={(switcherTurned)=>{}}
switcherTurned={true}
/>;

export const SwitcherOff = () => <ControlledSwitcher
    setSwitcherTurned={(switcherTurned)=>{}}
    switcherTurned={false}
/>;

export const SwitcherOnAction = () => <ControlledSwitcher
    setSwitcherTurned={action("mode is switched")}
    switcherTurned={true}
/>;
export const SwitcherOffAction = () => <ControlledSwitcher
    setSwitcherTurned={action("mode is switched")}
    switcherTurned={false}
/>;

export const SwitcherChanging = () => {
    const [switcherMode, setSwitcherMode] = useState(false)
    return <ControlledSwitcher
        setSwitcherTurned={setSwitcherMode}
        switcherTurned={switcherMode}
    />
};


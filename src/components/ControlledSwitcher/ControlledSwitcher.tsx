import React from 'react';
import './ControlledSwitcher.css'

type ControlledSwitcherType = {
    setSwitcherTurned: (switcherTurned:boolean)=>void
    switcherTurned: boolean
}

export const ControlledSwitcher: React.FC<ControlledSwitcherType> = (props) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.switcherTurned ? "green" : "white",
        cursor: "pointer"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.switcherTurned ? "red" : "white",
        cursor: "pointer"
    }
    const lampStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor: props.switcherTurned ? "green" : "red"
    }

    return (
        <>
            <div style={onStyle} onClick={()=>props.setSwitcherTurned(true)}>On</div>
            <div style={offStyle} onClick={()=>props.setSwitcherTurned(false)}>Off</div>
            <div style={lampStyle}></div>
        </>
    )
};
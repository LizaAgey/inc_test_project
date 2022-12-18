import React, {useState} from 'react';
import './UncontrolledSwitcher.css'

type UncontrolledSwitcherType = {
    onChange: (isTurned: boolean) => void
}

export const UncontrolledSwitcher: React.FC<UncontrolledSwitcherType> = (props) => {

    const [isTurned, setIsTurned] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: isTurned ? 'green' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !isTurned ? 'red' : 'white',
        cursor: 'pointer'
    }
    const lampStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: isTurned ? 'green' : 'red'
    }

    const onClickHandler = () => {
        setIsTurned(!isTurned)
        props.onChange(!isTurned)
    };

    return (
        <>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={lampStyle}></div>
        </>
    )


    //  TRAIN 1
    // let stylesClass = classnames({"red": !props.isTurned}, {"green": props.isTurned});
    // let stylesClass = props.isTurned ? "green" : "red";
    // return (
    //     <div className={stylesClass}>TEST</div>
    // )


    //  TRAIN 2
    // const turnOn = () => {
    //     return (
    //         <div className={"onOff"}>
    //             <div className={"green"}>On</div>
    //             <div>Off</div>
    //             <div className={`lamp green`}></div>
    //         </div>
    //     )
    // };
    //
    // const turnOff = () => {
    //     return (
    //         <div className={"onOff"}>
    //             <div className={"red"}>On</div>
    //             <div>Off</div>
    //             <div className={`lamp red`}></div>
    //         </div>)
    // };
    // return (
    //     <div>
    //         {props.isTurned && turnOn }
    //         {!props.isTurned && turnOff}
    //     </div>
    // );
};
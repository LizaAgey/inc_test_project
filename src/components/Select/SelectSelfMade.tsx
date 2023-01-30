import React, {useEffect, useState} from 'react';
import styles from './SelectSelfMade.module.css'
import {KeyboardEvent} from 'react';

type ItemsType = {
    id: number
    value: string
}

export type SelectType = {
    value?: string
    onChange?: (value: string) => void
    items: Array<ItemsType>
}

const SelectSelfMade: React.FC<SelectType> = (props) => {
    const [currentValue, setCurrentValue] = useState(props.value)
    const [isExpanded, setExpanded] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {setHoveredElementValue(currentValue)
    }, [currentValue])

    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)
    const itemsToDisplay = props.items.map(item => <div
        key={item.id}
        onMouseEnter={() => setHoveredElementValue(item.value)}
        className={styles.option + ' ' + (hoveredItem === item ? styles.selectedItem : '')}
        onClick={() => selectOptionHandler(item.value)}
    >{item.value}</div>)

    const collapseHandler = () => setExpanded(!isExpanded)
    const selectOptionHandler = (value: string) => {
        setCurrentValue(value)
        setExpanded(false)
    };
    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        console.log(event.key)
        for (let i = 0; i < props.items.length; i++) {
            if(event.key === "ArrowDown" || event.key === "ArrowUp") {

                if (props.items[i].value === hoveredElementValue) {

                    const nextHoveredElement = event.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    console.log(nextHoveredElement)

                    if (nextHoveredElement) {
                        setCurrentValue(nextHoveredElement.value)
                        return
                    }
                }

                setCurrentValue (props.items[0].value)
            }

            if(event.key === "Escape" || event.key === "Enter") {
                setExpanded(false)
            }

        }
    };

    return (
        <div className={styles.selectWrapper} tabIndex={0} onKeyUp={onKeyUpHandler}>
            <div className={styles.defaultSelect} onClick={collapseHandler}>
                {currentValue}
                <div className={styles.arrowDown} onClick={collapseHandler}></div>
            </div>

            {isExpanded && <div className={styles.optionsSelect}>
                {itemsToDisplay}
            </div>}
        </div>
    );
};

export default SelectSelfMade;
import React, {useState} from 'react';
import styles from './SelectSelfMade.module.css'

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
    const [curretValue, setCurrentValue] = useState(props.value)
    const [isExpanded, setExpanded] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    const collapseHandler = () => {
        setExpanded(!isExpanded)
    };

    const selectOptionHandler = (value: string) => {
        setCurrentValue(value)
        setExpanded(false)
    };
    const itemsToDisplay = props.items.map(item => <div
        key={item.id}
        onMouseEnter={()=>setHoveredElementValue(item.value)}
        className={styles.option + " " + (hoveredItem === item ? styles.selectedItem : "")}
        onClick={() => selectOptionHandler(item.value)}
    >{item.value}</div>)

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.defaultSelect} onClick={collapseHandler}>
                {curretValue}
                <div className={styles.arrowDown} onClick={collapseHandler}></div>
            </div>

            {isExpanded && <div className={styles.optionsSelect}>
                {itemsToDisplay}
            </div>}
        </div>
    );
};

export default SelectSelfMade;
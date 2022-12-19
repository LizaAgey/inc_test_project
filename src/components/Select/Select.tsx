import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemsType = {
    id: number
    value: any
}

export type SelectType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemsType>
}

const Select: React.FC<SelectType> = (props) => {
    const [curretValue, setCurrentValue] = useState(props.value)
    const [isCollapsed, setCollapsed] = useState(true)

    const collapseHandler = () => {
        setCollapsed(!isCollapsed)
    };

    const selectOptionHandler = (value: any) => {
     setCurrentValue(value)
        setCollapsed(false)
    };

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.defaultSelect} onClick={collapseHandler}>{curretValue}
                <div
                    className={styles.arrowDown}
                    onClick={collapseHandler}>
                </div>
            </div>

            {isCollapsed && <div className={styles.optionsSelect}>
                {props.items.map(item => <div
                    key={item.id}
                    className={styles.option}
                onClick={()=> selectOptionHandler(item.value)}
                >{item.value}</div>)}
            </div>}
        </div>
    );
};

export default Select;
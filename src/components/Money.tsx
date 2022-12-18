import React from 'react';
import {FilterValueType} from "../App";

type MoneyRecordType = {
    banknotes: string,
    value: number,
}


type MoneyType = {
    currentMoney: Array<MoneyRecordType>,
    onClickFilterHandler: (FilterValue: FilterValueType) => void
}
const Money: React.FC<MoneyType> = (props) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((initialElement: MoneyRecordType, index) => {
                    return (
                        <li key={index}>
                            <span>{initialElement.banknotes} -</span>
                            <span>{initialElement.value} -</span>
                        </li>)

                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler("all")}>all</button>
            <button onClick={() => props.onClickFilterHandler("RUBLS")}>RUBLS</button>
            <button onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>

        </div>
    );
};


export default Money;
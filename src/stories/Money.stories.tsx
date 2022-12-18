import React, {useState} from 'react'
import Money from '../components/Money';
import {FilterValueType} from '../App';

export default {
    title: 'Money stories',
    component: Money
}

export const MoneyStories = () => {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let currentMoney = money
    const [filterValue, setFilterValue] = useState<FilterValueType>('all')
    const onClickFilterHandler = (currency: FilterValueType) => {
        setFilterValue(currency)
    };
    if (filterValue === 'Dollars') {
        currentMoney = currentMoney.filter((initialElement, index) => initialElement.banknotes === 'Dollars')
    }
    if (filterValue === 'RUBLS') {
        currentMoney = currentMoney.filter((initialElement, index) => initialElement.banknotes === 'RUBLS')

    }
    if (filterValue !== 'all') {
        currentMoney = currentMoney.filter((initialElement) => initialElement.banknotes === filterValue)
    }

    return <Money
        currentMoney={currentMoney}
        onClickFilterHandler={onClickFilterHandler}
    />
};

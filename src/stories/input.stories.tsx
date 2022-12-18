import React, {
    ChangeEvent,
    DetailedHTMLProps,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useRef,
    useState
} from 'react'

import {Story} from '@storybook/react';

export default {
    title: 'input'
}
const Template: Story<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (args) =>
    <input {...args}/>

export const ControlledInput = Template.bind({})
export const UncontrolledInput = Template.bind({})
export const TrackedUncontrolledInput = (args: any) => {
    const [value, setValue] = useState('')
    return <>
        <input
            {...args}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}/>
        Value is "{value}"
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = (args: any) => {
    const [value, setValue] = useState('')
    let inputValue: string
    const inputCurrentValueHandler = (event:ChangeEvent<HTMLInputElement>) => {
        inputValue = event.currentTarget.value
    };
    return <>
        <div>
            <input {...args} onChange={inputCurrentValueHandler}/>
            <button onClick={() => {
                setValue(inputValue)
            }}>Save
            </button>
        </div>
        Actual value is "{value}"
    </>
};
export const GetValueOfUncontrolledInputByButtonPressViaRef = (args: any) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };

    return <>
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>Save
            </button>
        </div>
        Actual value is "{value}"
    </>
};

ControlledInput.args = {
    value: 'hei'
}
TrackedUncontrolledInput.args = {
    type: 'text',
}
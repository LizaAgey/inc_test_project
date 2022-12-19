import React, {
    ChangeEvent,
    DetailedHTMLProps,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useRef,
    useState
} from 'react'

import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
}
const Template: Story<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (args) =>
    <input {...args}/>

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
    const inputCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
TrackedUncontrolledInput.args = {
    type: 'text',
}

export const ControlledCheckbox = (args: any) => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}
export const ControlledInput = (args: any) => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <input type="text" value={parentValue} onChange={onChange}/>
}
export const ControlledSelect = (args: any) => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <select value={parentValue} onChange={onChange}>
        <option value="1">none</option>
        <option value="2">Hey</option>
        <option value="3">Lalaley</option>
    </select>
}

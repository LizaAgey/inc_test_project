import {CHANGE_COLLAPSED_MODE, reducer, StateType} from './Reducer';

test('reducer should change a value to opposite one', () => {
    //data
    const state: StateType = {
        isCollapsed: false
    }
    //action
    const newState = reducer(state, {type: CHANGE_COLLAPSED_MODE})

    //expectation
    expect(newState.isCollapsed).toBe(true)
})

test('reducer should throw error', () => {
    //data
    const state: StateType = {
        isCollapsed: false
    }

    expect(() => reducer(state, {type: "FAKE TYPE"})).toThrowError()
})

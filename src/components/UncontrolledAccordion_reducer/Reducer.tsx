export type ActionType = {
    type: string
}

export type StateType = {
    isCollapsed: boolean
}

export const CHANGE_COLLAPSED_MODE = 'CHANGE_COLLAPSED_MODE'

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_COLLAPSED_MODE:
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            throw new Error('incorrect action type')
    }
};
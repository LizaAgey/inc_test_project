export type ActionType = {
    type: string
}

export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_COLLAPSED_MODE':
            return !state
        default:
            throw new Error('incorrect action type')
    }
};
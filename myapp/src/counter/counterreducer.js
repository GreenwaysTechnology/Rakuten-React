

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, value: state.value + 1 }
        default:
            return state;
    }
}
export {counterReducer }
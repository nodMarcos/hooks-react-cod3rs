export function numberReducer(state, action) {
    switch (action.type) {
        case 'number_add2': 
            return {...state, number: state.number + 2}

        case 'number_multi7': 
            return {...state, number: state.number * 7}

        case 'number_div25': 
            return {...state, number: state.number / 25}
        
        case 'number_addN': 
            return {...state, number: state.number + action.payload}
        
        case 'number_int': 
            return {...state, number: parseInt(state.number)}
        default:
            return state
    }

}
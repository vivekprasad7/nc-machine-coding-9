export function reducer(state, action){
    switch(action.type){
        case"INITIAL_DISPATCH":
        return {...state, categories: action.payload}
        case"FILTER_BY_CATEGORY":
        return {...state, category : action.payload}
        default:
            return state;
    }
}
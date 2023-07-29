export function reducer(state, action){
    switch(action.type){
        case"INITIAL_DISPATCH":
        return {...state, categories: action.payload}
        case"FILTER_BY_CATEGORY":
        return {...state, category : action.payload}
        case"WATCH_LATER":{
            return state.watchLater.includes(action.payload) ?
             {...state, watchLater : state?.watchLater?.filter((video) => video !== action.payload)} :
            {...state, watchLater : [...state?.watchLater, action.payload]}
        }

        default:
            return state;
    }
}
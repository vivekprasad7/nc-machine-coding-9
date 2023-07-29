import { v4 as uuid } from "uuid";


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
        case"ADD_NEW_PLAYLIST":
        return {
            ...state, playlistData : [
                ...state?.playlistData,
                {
                    pID: uuid(),
                    playlistName:action?.playlistName,
                    playlistVideos:[],
                }
            ]
        }
        case"ADD_TO_PLAYLIST":
        state?.playlistData.find((item) => item?.pID === action?.pID).playlistVideos.push({
            ...action?.video, vID: uuid()
        });
        return {...state};

        case"OPEN_PLAYLIST_MODAL":
        return{...state, openPlaylistModal: true};
        case"CLOSE_PLAYLIST_MODAL":
        return{...state, openPlaylistModal: false};
        case"OPEN_EDIT_MODAL":
        return{...state, openEditModal: true};
        case"CLOSE_EDIT_MODAL":
        return{...state, openEditModal: false};
        
        

        default:
            return state;
    }
}
import { categories } from "../api/categoriesData";
import { videos } from "../api/videosData";
import { reducer } from "../reducers/reducer";

const { createContext, useContext, useReducer, useState } = require("react");

const AppContext = createContext();
 
export const AppContextProvider = ({children}) => {

    const [categoriesData, setCategoriesData] = useState(categories);
    const [videosData, setVideosData] = useState(videos);

    const initialState = {
        categories:[],
        videos:[],
        category:"All",
        watchLater:[],
    }

    const [ state, dispatch] = useReducer(reducer, initialState)




    return <AppContext.Provider value={{
        categoriesData,
        videosData,
        state,
        dispatch,
    }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
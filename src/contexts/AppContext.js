const { createContext, useContext } = require("react");

const AppContext = createContext();
 
export const AppContextProvider = ({children}) => {
    
    return <AppContext.Provider value={{

    }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
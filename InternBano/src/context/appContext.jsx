import { useState } from "react";
import { createContext } from "react";
import App from "../App";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: "",
        location: "",
    });
    const [isSearched, setIsSearched] = useState(false)

    const value={
        searchFilter, setSearchFilter, 
        isSearched, setIsSearched
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
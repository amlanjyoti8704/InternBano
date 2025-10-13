import { useEffect, useState } from "react";
import { createContext } from "react";
import App from "../App";
import { jobsData } from "../assets/assets";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: "",
        location: "",
    });
    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs]=useState([])
    // function to fetch jobs
    const fetchJobs=async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value={
        searchFilter, setSearchFilter, 
        isSearched, setIsSearched,
        jobs, setJobs
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
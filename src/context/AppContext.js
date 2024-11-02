import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [blogs,setBlogs] = useState([]);
    const [pages,setPages] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    const value = {
        blogs,
        setBlogs,
        loading,
        setLoading,
        pages,
        setPages,
        totalPages,
        setTotalPages
    };

    return <AppContext.Provider value={value}>
        {children}
    
    </AppContext.Provider>;
}
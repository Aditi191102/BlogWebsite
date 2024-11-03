import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [pages,setPages] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    async function fetchBlog(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setPages(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            alert("error in fetching data");
        }
        setLoading(false);
    }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        pages,
        setPages,
        totalPages,
        setTotalPages,
        fetchBlog
    };

    return <AppContext.Provider value={value}>
        {children}
    
    </AppContext.Provider>;
}
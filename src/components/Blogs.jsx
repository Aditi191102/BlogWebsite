import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs(){
    const {loading,posts} = useContext(AppContext);

    return(
        <div>
           {
            loading ? (<Spinner/>) : 
            ( posts.map( (post)=> (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p> By <span>{post.author}</span> on <span>{post.category}</span></p>
                    <p>Posted on {post.date}</p>
                    <p>{post.content}</p>
                    {/* <div>
                        <img src={post.img} alt={post.category + " "+ "image"}></img>
                    </div> */}
                </div>
            )
        )
    )
           }
        </div>
    )
}
export default Blogs;
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer(){

    const {pages,totalPages,handlePageChange} = useContext(AppContext);

    return(
        <div className="flex gap-5">
            <div>
                {
                    pages > 1 &&
                    (<button onClick={()=>handlePageChange(pages-1)} className="border border-black bg-blue-400 rounded-md p-1">
                        Previous
                    </button>)
                }
            </div>

            <div>
                {
                    pages < totalPages &&
                    (<button className="border border-black bg-blue-400 p-1 rounded-md" 
                            onClick={()=>handlePageChange(pages+1)}>
                        Next
                    </button>)
                }
            </div>

            <p>Page{pages} of {totalPages}</p>
        </div>
    )
}
export default Footer;
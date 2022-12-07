import React from "react"
import { CiSearch

} from "react-icons/ci";
const Search = () => {
    return(
        <form className="d-flex position-absolute top-50 end-0 translate-middle-y px-5">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn" type="submit"><CiSearch/></button>
                                    
        </form>
        
    )

}

export default Search;


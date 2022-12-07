import Header from "./Header";
import {Link} from 'react-router-dom'
import { CiSearch, CiHome, CiLogout, CiSquareMore } from "react-icons/ci";
import Button from "./Button";
import LateralNav from "./LateralNav";
import Search from "./Search";


const HeaderHome = () =>{
    return(
        <nav class="navbar bg-primary navbar-expand-lg ">
            <div class="container-fluid">                                              
                <div class="collapse navbar-collapse position-relative" id="navbarTogglerDemo02">

                    <LateralNav/>

                    <div className="Container px-5">
                        <h1>React Vdeos</h1>
                        
                    </div>               
                    <Link to={'/home'}>                                               
                        <a class="navbar-brand " ><CiHome/></a>  
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                  
                    </Link>
                    <Link to={'/about'}>                                               
                        <a class="navbar-brand " ><CiSquareMore/></a>  
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                  
                    </Link>
                    <Link to={'/'}>                                               
                        <a class="navbar-brand" ><CiLogout/></a>  
                        <button class="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                  
                    </Link>
    
                    <Search/>
                        
                </div>
            </div>
        </nav>
        
    )

}

export default HeaderHome;
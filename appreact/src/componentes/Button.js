import React, { Component } from "react";



const Button = ({name , type}) => {
    if (name == null)
        name = 'default';
    
    return(
        <div className="container">

            <input type={type} className="btn bg-light mt-3 " value={name}/>
        </div>
    )
}

export default Button;
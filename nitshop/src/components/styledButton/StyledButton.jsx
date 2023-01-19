import React from "react";
import "./styledButton.css";
const styledButton=(props)=>{
    
    return (
    <button className='styledButton' onClick={props.onClickHandler}>
        {props.innerText}
        </button>
)};

export  default styledButton;
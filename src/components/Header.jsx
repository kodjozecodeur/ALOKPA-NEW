import React from "react";

function Header(props){
    return(
        <div class= "contenaire d-flex justify-content-between mt-4" >
            <p>{props.contact}</p>
            <p>{props.shipping}</p>
            <div>
                <button >{props.icon1}</button>
                <button >{props.icon2}</button>
                <button >{props.icon3}</button>
                <button >{props.icon4}</button> 
            </div>
        </div>
       
    )
}

export default Header;
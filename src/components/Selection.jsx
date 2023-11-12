import React from "react";
import model from "../assets/images/model.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Selection(props){
    return(            
    <div class="position-relative  contenaire my-5 model">
        <img src= {model} alt="" class="  w-100 "  />
        <div class=" position-absolute justify-content-center align-items-center collection1-text">
        <p className="text-uppercase text-muted" >Denin collection</p>
        <h1 className="fw-bolder fs-1">The Casual <br/> Selection.</h1>
        <p className="text-muted">Lorem ipsum dolor sit amet, strud exercitation ullamco laboris nisi <br />strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatut aliquip ex ea commodo consequat.</p>
        <button type="button" class="btn btn-outline-dark border-0 p-0 fw-semibold">Shop collection <ArrowForwardIcon /></button>
        </div>
    </div>

    )
}

export default Selection;
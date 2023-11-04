import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SessionName(props){
    return(
        <div class="d-flex justify-content-between contenaire mt-4">
        <h2>Featured Products</h2>
        <button type="button" class="btn btn-outline-dark border-0">View All Products <ArrowForwardIcon /></button>
        </div>
    )
}

export default SessionName;
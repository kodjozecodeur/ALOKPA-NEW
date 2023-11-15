import React from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import LabelIcon from '@mui/icons-material/Label';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Collections(props){
    return(
        <div className="my-5">
        <hr className="my-5"></hr>
        <div className="row  fs-4 text-center my-5 contenaire"> 
            <div class="col-sm-6 col-lg-3  ">
                    <LocalShippingIcon /> Free Shipping over $200
            </div>
            <div class="col-sm-6 col-lg-3">
                    <AssignmentReturnIcon /> Return back  7days
            </div>
            <div class="col-sm-6 col-lg-3">
                    <LabelIcon /> Buy 4 and get 5% off
            </div>
            <div class="col-sm-6 col-lg-3">
                    <HelpOutlineIcon /> Ask any question
            </div>

        </div>
        <hr className="my-5"></hr>

        </div>
    )
}

export default Collections;
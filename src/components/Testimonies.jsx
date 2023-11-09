import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testimonies(props){
    return(
        <div class=" contenaire d-flex justify-content-between ">
            <div class="w-25 d-flex "><FormatQuoteIcon sx={{ fontSize: 100, color: "gray" }}  /></div>
            <div id="carouselExampleControlsNoTouching" class="carousel my-5 me-5 slide position-relative" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                    <div class="carousel-item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="carousel-item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <p class="text-primary">Majesty </p>
                <button class="carousel-control-prev position-absolute top-100 arrow-left text-black  " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev"><ArrowBackIcon  /></button>
                <button class="carousel-control-next position-absolute top-100 arrow-rigth text-black " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next"><ArrowForwardIcon /></button>
            </div> 
      
        </div>
    )   
}

export default Testimonies;
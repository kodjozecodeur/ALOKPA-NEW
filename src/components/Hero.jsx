import React from "react";
import Banner2 from "../assets/Banner2.jpg"


function Hero(props){
    return(
<div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel" >
  <div class="carousel-inner " >
    <div class="carousel-item active d-flex position-relative">
      <img src= {props.banner1} alt={props.alt1} class="d-block w-100   "  />
      <div class="position-absolute justify-content-center align-items-center hero-text">
      {props.heroTxt1}
      <p >{props.heroP1}</p>
      <button type="button" class="btn btn-light">{props.heroShop1}</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src= {props.banner2} alt={props.alt2} class="d-block w-100 " />
      <div class="position-absolute justify-content-center align-items-center hero-text">
      {props.heroTxt2}
      <p >{props.heroP2}</p>
      <button type="button" class="btn btn-light">{props.heroShop2}</button>
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
)
}

export default Hero;
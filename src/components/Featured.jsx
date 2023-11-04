import React from "react";

function Featured(props){
    return (
      <div>

      <div class="card featured contenaire">
      <img src={props.img}></img>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <a href="#" class="icon-link">
        Call to action
      </a>
    </div>
    </div>
 )
}

export default Featured;
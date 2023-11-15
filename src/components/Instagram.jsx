import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import insta from '../insta';


function Instagram() {
  return (
    <div className="contenaire ">
        <div class="justify-content-between  ">
        <h2>Follow Our Instagram</h2>
        <p>Our official instagram account <a>@Ablavi</a> or <a>#Ablavi</a></p>
        </div>

      <div className="row my-5 "> 
        {insta.map((item,index) => (
          <div key={index} className=" col-lg-2 col-md-4 col-xs-6">
            <div className="card m-2 ">
                <img  className ="card-img" src={item.imgURL}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instagram;

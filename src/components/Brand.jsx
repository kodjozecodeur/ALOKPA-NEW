import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import brand from '../brand';

function Brand() {
  return (
    <div className=" bg-light branding">
      <div className="row my-5 contenaire  "> 
        {brand.map((item,index) => (
          <div key={index} className=" col-lg-2 col-md-4 col-xs-12">
            <div className=" m-2 ">
                <img  className ="card-img" src={item.imgURL}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;

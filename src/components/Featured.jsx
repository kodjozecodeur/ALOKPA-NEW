import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import featured from '../featured';

function Featured() {
  return (
    <div className="contenaire my-5 ">
      <div className="row"> 
        {featured.map((item,index) => (
          <div key={index} className="col col-lg-3 col-md-6 col-sm-12">
            <div className="card m-2 ">
              <div className="card-body">
                <img  className ="card-img" src={item.imgURL}></img>
                <h5 className="card-title text-center">{item.title}</h5>
                <p className="card-text text-center">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import Selling from '../Selling';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Bests() {
  return (
    <div class="bg-light container-fluid best">
    <div className="contenaire my-5 bg-light ">
      <div className="row "> 
      <h2 class="text-capitalize mt-5">best selling products</h2>
      <div id='selling-product'>
      <ul class="tabs list-unstyled " >
          <a><li class="active tab">All</li></a>
          <a><li class="tab">Shoes</li></a>
          <a><li class="tab">Tshirts</li></a>
          <a> <li class="tab">Pants</li></a>
          <a><li class="tab">Hoodie</li></a>
          <a><li class="tab">Outer</li></a>
          <a><li class="tab">Jackets</li></a>
          <a><li class="tab">Accessories</li></a>
        </ul>
      </div>
        {Selling.map((item,index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
            <div className="card m-2 position-relative ">
              <div className="card-body best-card">
                <img  className ="card-img" src={item.imgURL}></img>
                <h5 className="card-title text-center">{item.title}</h5>
                <p className="card-text text-center">{item.price}</p>
              </div>
              <div class=" hidden btn-group text-center top top-50 start-50 translate-middle position-absolute" >
              <div class="btn-group p-0" >
                <button type="button" class="btn btn-light"><ShoppingBasketIcon /> </button>
                <button type="button" class="btn btn-light"><FavoriteBorderIcon /></button>
              </div>   
           </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Bests;

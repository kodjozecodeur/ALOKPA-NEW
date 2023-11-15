import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import journal from '../journal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Journal() {
  return (
    <div className="contenaire ">
        <div class="d-flex justify-content-between  ">
        <h2>Our Journal</h2>
        <button type="button" class="btn btn-outline-dark border-0">Read All Article <ArrowForwardIcon /></button>
        </div>

      <div className="row my-5 "> 
        {journal.map((item,index) => (
          <div key={index} className=" col-lg-4 col-md-4 col-xs-12">
            <div className="card m-2 ">
                <img  className ="card-img" src={item.imgURL}></img>
            </div>
            <div className='d-flex flex-row bd-highlight p-2  mb-4 '>
                    <p className="card-text p-2 text-center">{item.price} <br /> Janv- <br /> 2023</p>
                    <h5 className="card-title p-2 text-center">{item.title} <br /> {item.title} <br /> {item.title}</h5>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;

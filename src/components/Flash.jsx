import React from "react";
import flash from "../flash";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Flash(){
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      modules={[Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {flash.map((item,index)=>{
            return(<div class="my-5 ">
                <SwiperSlide className="contenaire ">
                    <div key={index} >
                        <div className="card m-2 d-inline-block">
                        <div className="card-body">
                            <img  className ="card-img" src={item.imgURL}></img>
                            <h5 className="card-title text-center">{item.title}</h5>
                            <p className="card-text text-center">{item.price}</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

            </div>
            )

        })}
    </Swiper>
  );
};
export default Flash;
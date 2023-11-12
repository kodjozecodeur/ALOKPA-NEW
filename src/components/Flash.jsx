import React, { useRef, useState } from 'react';
import flash from "../flash";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function Flash(){
  return (
    <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
    >



        {flash.map((item,index)=>{
            return(
                <SwiperSlide >
                    <div key={index} className="position-relative " >
                        <div className="card m-2 position-relative ">
                            <img  className ="card-img" src={item.imgURL}></img>
                            <h5 className="card-title text-center">{item.title}</h5>
                            <p className="card-text text-center">{item.price}</p>
                        </div>
                        <div>
                              <p class="off position-absolute">10% off</p>
                            </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </SwiperSlide>
            )

        })}
    </Swiper>
  );
};
export default Flash;
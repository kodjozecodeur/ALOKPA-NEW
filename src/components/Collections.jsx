import React from "react";
import collectionItem1 from "../assets/images/collection-item1.jpg"
import collectionItem2 from "../assets/images/collection-item2.jpg"
import collectionItem3 from "../assets/images/collection-item3.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Collections(props){
    return(
        <div className="grid contenaire " >
            <div class="position-relative mancollection">
                <img src= {collectionItem1} alt="" class="  w-100  "  />
                <div class=" position-absolute justify-content-center align-items-center collection1-text">
                <p >Lorem ipsum</p>
                <h2>Street <br/> Wear.</h2>
                <p>Lorem ipsum dolor sit amet, strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button type="button" class="btn btn-outline-dark border-0 p-0">Shop collection <ArrowForwardIcon /></button>
                </div>
            </div>
            <div  class="position-relative">
                <img src= {collectionItem2} alt="" class=" w-100  "  />
                <div class=" position-absolute justify-content-center align-items-center collection-text">
                <p >Lorem ipsum</p>
                <h2>Basic <br/> Shoes.</h2>
                <button type="button" class="btn btn-outline-dark border-0 p-0">Shop collection <ArrowForwardIcon /></button>
                </div>
            </div>
            <div  class="position-relative">
                <img src= {collectionItem3} alt="" class=" w-100  "  />
                <div class=" position-absolute justify-content-center align-items-center collection-text">
                <p >Lorem ipsum</p>
                <h2>Wooean <br/> Hat.</h2>
                <button type="button" class="btn btn-outline-dark border-0 p-0">Shop collection <ArrowForwardIcon /></button>
                </div>
            </div>



        </div>
    )
}

export default Collections;
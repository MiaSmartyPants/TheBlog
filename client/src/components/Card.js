import React from 'react';
import {useState, useEffect} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
  
 


function Card ({allBlogs}){
// function handleClose(){
//     setIsOpen(false)
// }
console.log("card", allBlogs)

const [name, setName] = useState();
const [descritpion, setDescritpion] = useState();
const [recipe, setRecipe] = useState();
const [img, setImg] = useState();
    
const Popup = ({handleClose}) => {

};



    return(

       
       <div className="popup-box">
            <div className="box">
              <span className="close-icon" >x</span>
              {/* onClick={handleClose} */}
              <br></br><br></br>
              <div className="card ">
                  img
            <img src={allBlogs[0].img} />
            <div className="card-body">
                card body
              <h2>{allBlogs[0].name}</h2>
              <p>{allBlogs[0].descritpion}</p>
			  <h5>{allBlogs[0].recipe}</h5>
            </div>
                </div>
            </div>
          </div>
 


)
}
export default Card;
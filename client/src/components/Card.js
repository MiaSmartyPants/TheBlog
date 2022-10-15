import React from 'react';
import {useState, useEffect} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
  
 


function Card ({openBlog,func}){
// function handleClose(){
//     setIsOpen(false)
// }
console.log("card", openBlog.img)

const [name, setName] = useState();
const [descritpion, setDescritpion] = useState();
const [recipe, setRecipe] = useState();
const [img, setImg] = useState();
    
const handleClose = () => {
  func(false)

};



    return(

       
       <div className="popup-box">
            <div className="box">
              
             
              <br></br><br></br>
              <div className="card ">
              <span className="close-icon"  onClick={handleClose} style={{color: "red"}} >x</span>   
            <img src={openBlog.img} />
            <div className="card-body">
                
              <h2>{openBlog.name}</h2>
              Description
              <p>{openBlog.descritpion}</p>
              Recipe
			  <h5>{openBlog.recipe}</h5>
            </div>
                </div>
            </div>
          </div>
 


)
}
export default Card;
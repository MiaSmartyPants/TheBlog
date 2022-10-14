import Popup from "./Card"
import { useState } from "react";
import Card from "./Card";


export const Image = ({ title, smallImage }) => {

  
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        

       
        
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        
      </div>
    </div>
  )
}
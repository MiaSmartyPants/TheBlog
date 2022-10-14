import { Image } from "./image";
import { useState } from "react";
import getBlogs from "../data/getBlogs";
import Card from "./Card"

export const Gallery = (props) => {

  const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
      console.log(isOpen)
    }

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>The Recipes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.allBlogs
              ? props.allBlogs.map((d, i) => (
                <div key={`${d.id}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <button onClick={togglePopup}>
                  <Image title={d.name} largeImage={d.img} smallImage={d.img} />      
                  </button>
                 
                  {!!isOpen &&
                    <Card allBlogs={props.allBlogs}/> }
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}

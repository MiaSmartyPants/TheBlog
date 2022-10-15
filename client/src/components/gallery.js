import { Image } from "./image";
import { useState } from "react";
import getBlogs from "../data/getBlogs";
import Card from "./Card"

export const Gallery = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [openBlog, setOpenBlog] = useState(null);


    const togglePopup = (d) => {
      setIsOpen(!isOpen);
       setOpenBlog(d)
      console.log(isOpen)
      console.log(openBlog)
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
                  <button className='button' onClick={() => setOpenBlog(d)}>
                  <Image title={d.name} largeImage={d.img} smallImage={d.img} />      
                  </button>
                </div>
              ))
              : 'Loading...'}
          </div>
          {!!openBlog &&
                    <Card openBlog={openBlog} func={setOpenBlog}/> }
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { SignIn } from "./pages/SignIn";
import JsonData from "./data/data.json";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import SmoothScroll from "smooth-scroll";
import "./App.css";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    getData() 
  }, []);
  
  
  // function getBlogs() {

    const [allBlogs, setAllBlogs] = useState();
  
      async function getData() {
        await fetch("http://localhost:5050/blogposts")
        
        //return the response
          .then((response) => response)
          .then((data) => {
            return data.json();
          })
          .then((data)=> {
            console.log("data", data)
            setAllBlogs(data)
            
              //   let displayEvent = data[0];
          //  console.log(displayEvent)
            
      
          })
       } 
         
    // }

  return (
    <div>
      <div>
      <Navigation />
      <Header data={landingPageData.Header} />
    
      <About data={landingPageData.About} />
     
      <Gallery data={landingPageData.Gallery} allBlogs={allBlogs}/>
      <Testimonials data={landingPageData.Testimonials} />
      
      <Contact data={landingPageData.Contact} />
      </div>
      
     <div>
     <Router>
    <Navbar />
    <Routes>
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </Router>
    </div> 
    </div>
  );
};

export default App;

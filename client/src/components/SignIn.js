
import React, { useState, useEffect } from "react";
import {useRef} from 'react';
import ReactDOM from "react-dom";

import "../App.css";

export function SignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 const [username, setUserName] = useState();
 const [password, setPassword] = useState();
 const [passwordBE, setPasswordBE] = useState('');
 const [usernameBE, setUserNameBE] = useState('');



   async function getData(event) {
     event.preventDefault();
    await fetch(`http://localhost:5050/login/${username}`)
    
    //return the response
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data)=> {
        console.log("sign in data", data)

        setUserNameBE(username)//why not data.username
        setPasswordBE(password)

         
        
      })
   } 
   useEffect(() => {
		// CALL here
     validation()
     },[usernameBE])
 

function validation (){
  console.log(usernameBE,passwordBE)
  if (usernameBE === username &&  passwordBE === password){
     setIsSubmitted(true)
     console.log('success')

  }

  
}
 

  

 
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={getData}>
        <div className="input-container">
         
          <label>Username </label>
          <input type="text" name="uname" required onChange={e => setUserName(e.target.value)}  />
          {renderErrorMessage("uname")}
        </div>
       
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={e => setPassword(e.target.value)}  />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="signin">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


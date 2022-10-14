import { useState } from 'react'
import emailjs from '@emailjs/browser'


const initialState = {
  name: '',
  email: '',
  message: '',
}
export const SignIn = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    
      
  }
  return (
    <div>

                <h2>Log In </h2>
                </div>

    
  )
}
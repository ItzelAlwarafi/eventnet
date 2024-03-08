import { useState, useContext, useEffect } from 'react'
import userContext from '../userContext'
import axios from 'axios'
export default function UserSignUpLogIn() {

  const { userType, setUserType } = useContext(userContext)
  
  const formInitialState = {
    user_type: '',
    username: '',
    fullname: '',
    e_mail: '',
    phone_Number: '',
    address_: '',
    password: '',
    passwordConfirm: ''
  }

  const [formState, setFormState] = useState(formInitialState)

  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(formState.password)


  const handleChange = (event) => {
    const { id, value } = event.target
    if (id === 'user_type') {
      setUserType(value)
    }
    setFormState({ ...formState, [id]: value })
  }



  useEffect(() => {
    console.log(userType)
    console.log(formState)
  }, [userType, formState])


  const handleSubmit = async (event) => {
    event.preventDefault()


    if (formState.password === formState.passwordConfirm && hasSpecialCharacter) {
        try {
         
            let response = await axios.post('http://localhost:3001/', formState)// ass route to users 
            console.log('Form submitted:', response.data)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    } else {
        console.log("Passwords do not match or password doesn't contain special characters")
    }
};

  return (
  <> 
      <form className="formContainer"onSubmit={handleSubmit}>
        <div className='selectdiv'>
        <label htmlFor=" user_type">Sign up as</label>
        <select id="user_type" value={formState.user_type} onChange={handleChange}>
          <option value='venueHost'>Venue Host</option>
          <option value='eventHost'>Event Host</option>
        </select>
        </div>
          <div className='hostContainer'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' value={formState.username} onChange={handleChange} required />

            <label htmlFor='fullname'>Name:</label>
            <input type='text' id='fullname' placeholder='Full name' value={formState.fullname} onChange={handleChange} required/>

            <label htmlFor='e_mail'>E-mail:</label>
            <input type='email' id='e_mail' placeholder='Email' value={formState.e_mail} onChange={handleChange} required  />

            <label htmlFor='phone_Number'>Phone Number:</label>
            <input type='tel' id='phone_Number' placeholder='Phone number' value={formState.phone_Number} onChange={handleChange}required  />

            <label htmlFor='address_'>Address:</label>
            <input type='text' id='address_' placeholder='Address' value={formState.address_} onChange={handleChange} required  />

            <label htmlFor='password'>Create a password:</label>
            <input type='password' id='password' placeholder='Password' value={formState.password} onChange={handleChange} required  />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <input type='password' placeholder='Confirm password' id='passwordConfirm' minLength={7} value={formState.passwordConfirm} onChange={handleChange} required  />
            
        <button type="submit" >Sign Up</button>
       
        {formState.password === formState.passwordConfirm ? (
                   <p className="valid" >Passwords match </p>
        ) : (
                 <p className="invalid">Passwords do not match</p>
        )}   

        {!hasSpecialCharacter && (
          <p className="invalid">Password must contain at least one special character</p>
        )}
       
         
          </div>
       
      </form>
      </>
  )
}

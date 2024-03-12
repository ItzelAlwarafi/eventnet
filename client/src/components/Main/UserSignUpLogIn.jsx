import { useState, useContext, useEffect } from 'react'
import userContext from '../../userContext'
import axios from 'axios'

export default function UserSignUpLogIn() {
  const { userType, setUserType } = useContext(userContext)
  const { loggedIn, setLoggedIn } = useContext(userContext)

  const formInitialState = {
    owner: '',
    host: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  const [formState, setFormState] = useState(formInitialState) 
  const [showSignUp, setShowSignUp] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logInMessage,setLogInMessage] =useState('')
const[className,setClassName] = useState('')

  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(formState.password)

  const handleChange = (event) => {
    const { id, value } = event.target
    if (id === 'user_type') {
      setUserType(value)
    }
    setFormState({ ...formState, [id]: value })
  }
  

  const handleLogIn = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get('http://localhost:3001/users')
  
    
      const user = response.data.find(user => user.username === formState.username)
  
      if (user && user.password === formState.password) {
        console.log('Login successful:', user)
        setLoggedIn(true)
        setLogInMessage(`Welcome ${user.first_name}`)
      } else {
        console.log('Invalid username or password')
        setLogInMessage('Invalid username or password')
      }
    } catch (error) {
      console.error('Error logging in:', error)
     
    }
  }
  
  useEffect(() => {
    console.log(userType)
    console.log(formState)
  }, [userType, formState])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formState.password === confirmPassword && hasSpecialCharacter) {
        try {
         
          const formDataJson = {
            first_name: formState.first_name,
            last_name: formState.last_name,
            username: formState.username,
            email: formState.email,
            password: formState.password,
            owner: formState.owner,
            host: formState.host,
          }
    
        
          const response = await axios.post('http://localhost:3001/users', formDataJson)
          console.log('Form submitted:', response.data)
          console.log("Passwords do not match or password doesn't contain special characters")
          setClassName('valid')
          setLogInMessage("You have been registered")
        } catch (error) {
          console.error('Error submitting form:', error)
        }
      } else {
        console.log("Passwords do not match or password doesn't contain special characters")
        setClassName('invalid')
        setLogInMessage("Passwords do not match or password doesn't contain special characters")
      }
    
  }

  return (
    <>
    <div className='toggle'>
     <button className='LogInBtn' onClick={() => { setShowSignUp(false); setUserType('eventHost'); setFormState(formInitialState); }}>Log In</button>
     </div>
      {showSignUp ? (
        <div className='BookContainer'>
          <form className="formContainer" onSubmit={handleSubmit}>

            <div className='selectdiv'>
              <div className='userHost'>
                <label> Are you an event host ?<input id='owner' type='radio' name='event_host' value='true' onChange={handleChange} ></input>Yes</label><label> <input type='radio' name='host' value='false' onChange={handleChange} ></input>No</label>
              </div>
              <div className='userHost'>
                <label> Are you a venue host ?<input id='host' type='radio' name='venue_host' value='true' onChange={handleChange}></input>Yes</label><label> <input type='radio' name='host' value='false' onChange={handleChange}></input>No</label>
              </div>
            </div>

            <div className='hostContainer'>
           
              <input type='text' id='username' placeholder='username' value={formState.username} onChange={handleChange} required />

            
              <input type='text' id='first_name' placeholder='First name' value={formState.first_name} onChange={handleChange} required />
          
              <input type='text' id='last_name' placeholder='Last name' value={formState.last_name} onChange={handleChange} required />

           
              <input type='email' id='email' placeholder='Email' value={formState.email} onChange={handleChange} required />

              <input type='password' id='password' placeholder='Password' minLength={7} value={formState.password} onChange={handleChange} required />
             
              <input type='password' placeholder='Confirm password' id='passwordConfirm' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

              <button type="submit" >Sign Up</button>

             
            
                <p className={className}>{logInMessage}</p>
             
            </div>

          </form>
        </div>
      ) : (
        <div className='BookContainer'>
          <form className="formContainer" onSubmit={handleLogIn}>
            <div className='hostContainer'>
              <input type='text' id='username' placeholder='username'value={formState.username} onChange={handleChange} required />
             
              <input type='password' id='password' placeholder=' password'value={formState.password} onChange={handleChange} required />
            </div>
            <button type="submit">Log In</button>
          </form>
             {logInMessage && (
             <p className="message"> {logInMessage} </p>
            )}
            <p>Don't Have and account yet ? </p>
            <button className='SignUpBtn' onClick={() => { setShowSignUp(true); setFormState(formInitialState); }}>Sign Up Here</button>

        </div>
      )}

    </>
  )
}

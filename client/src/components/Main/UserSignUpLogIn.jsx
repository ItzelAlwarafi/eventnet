import { useState, useContext, useEffect } from 'react'
import userContext from '../../userContext'
import axios from 'axios'



export default function UserSignUpLogIn() {
  const { userType, setUserType } = useContext(userContext)
  const { loggedIn, setLoggedIn } = useContext(userContext)
  const {user, setUser} = useContext(userContext)

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
  const [userNameMessage, setUserNameMessage] = useState('')
  const [passwordMessage,setPasswordMessage] = useState('')
 
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(formState.password)

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormState({ ...formState, [id]: value })
  }

  const handleHost = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value})
  }
   
  const getUserName = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.get('http://localhost:3001/users')
        
            const user = response.data.find(user => user.username === formState.username)
            if (user) { 
                setUserNameMessage( <p className ='invalid' style={{ color: 'red' }}>Please choose another username ! </p>)
            } else {
             setUserNameMessage(<p className='valid' style={{ color: 'green' }}> username </p>)
            }
    } catch (error) {
        console.error('Error:', error)
    }
}

const handlePassword = () => {
  if (hasSpecialCharacter) {
  console.log('password has special character')
  setPasswordMessage(<p className='valid' style={{ color: 'green' }}> special character </p>)
 
  } else {
    setPasswordMessage( <p className='invalid' style={{ color: 'red' }}> add special character ! </p>) 
  }
 
}

const matchPasswords = ()=> {

  if ( formState.password === confirmPassword ){
   setLogInMessage(<p className='valid' style={{ color: 'green' }}> passwords match </p>)
  }else{
    setLogInMessage(<p className ='invalid 'style={{ color: 'red' }}> password must match ! </p>)
  }
}

  const handleLogIn = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get('http://localhost:3001/users')
  
    
      const user = response.data.find(user => user.username === formState.username)
  
      if (user && user.password === formState.password) {
        // console.log('Login successful:', user)
        setLoggedIn(true)
        setLogInMessage(<p className='valid' style={{ color: 'green' }}>  Welcome {user.first_name} </p>)
        setUser(user)


      } else {
        console.log('Invalid username or password')
        setLogInMessage(<p className='invalid' style={{ color: 'red' }}> Invalid username or password</p>)
      }
    } catch (error) {
      console.error('Error logging in:', error)
     
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
  
  
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
          setLogInMessage(<p className='valid' style={{ color: 'green' }}> you have been registered</p>)

        } catch (error) {
          console.error('Error submitting form:', error)
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
                <label> Are you an event host ?<input id='owner' type='radio' name='host' value='true' onChange={handleHost} required ></input>Yes</label><label> <input type='radio' name='host' value='false' onChange={handleHost} required ></input>No</label>
              </div>
              <div className='userHost'>
                <label> Are you a venue host ?<input id='host' type='radio' name='owner' value='true' onChange={handleHost}required ></input>Yes</label><label> <input type='radio' name='owner' value='false' onChange={handleHost}required ></input>No</label>
              </div>
            </div>

            <div className='hostContainer'>
           
            
              <input type='text' id='username' placeholder='username' value={formState.username} onChange={handleChange} onBlur={getUserName} required />

            
              <input type='text' id='first_name' placeholder='First name' value={formState.first_name} onChange={handleChange} required />
          
              <input type='text' id='last_name' placeholder='Last name' value={formState.last_name} onChange={handleChange} required />

           
              <input type='email' id='email' placeholder='Email' value={formState.email} onChange={handleChange} required />

              <input type='password' id='password' placeholder='Password' minLength={7} value={formState.password} onChange={handleChange} onBlur={handlePassword} required />
             
              <input type='password' placeholder='Confirm password' id='passwordConfirm' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={matchPasswords} required />

              <button type="submit" >Sign Up</button>

             <div className='messeges'>
              {userNameMessage}
             {logInMessage}
             {passwordMessage}
              </div>


            </div>

          </form>
        </div>
      ) : (
        <div className='BookContainer'>
          <form className="formContainer" onSubmit={handleLogIn}>
            <div className='hostContainer'>
              <input type='text' id='username' placeholder='username'value={formState.username} onChange={handleChange} required />
             
              <input type='password' id='password' placeholder=' password'value={formState.password} onChange={handleChange}  required />
            </div>
            <button type="submit">Log In</button>
          </form>
           {logInMessage}
           
            <p>Don't have an account yet? </p>
            <button className='SignUpBtn' onClick={() => { setShowSignUp(true); setFormState(formInitialState);setLogInMessage('') }}>Sign Up Here</button>

        </div>
      )}

    </>
  )
}

import { useContext, useState } from 'react'
import userContext from '../../userContext'
import axios from 'axios'

export default function LogIn () {

    const {setLoggedIn} = useContext(userContext)
    const {setUser} = useContext(userContext)
    const [errorMessage, setErrorMessage] = useState()

    const initialState = {
        username: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleLogIn = async (event) => {
        event.preventDefault()

        const response = await axios.get(`http://localhost:3001/users/username/${formState.username}`)
        let userLogIn

        if (response) {
            setErrorMessage('')
            userLogIn = response.data
        } else {
            setErrorMessage('User not found')
        }

        if (userLogIn[0].password === formState.password) {
            setUser(userLogIn)
            setErrorMessage('')
            setLoggedIn(true)
        } else {
            setErrorMessage('Incorrect password')
        }
      }

    return (
        <div>
            <form onSubmit={handleLogIn} >
                <input type='text' id='username' placeholder='username' value={formState.username} onChange={handleChange} required />
                <input type='password' id='password' placeholder='password' value={formState.password} onChange={handleChange} required />
                <button type='submit'>Log In</button>
                { errorMessage !== '' ? errorMessage : null }
            </form>
        </div>
    )
}
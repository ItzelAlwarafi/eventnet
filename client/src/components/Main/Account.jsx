import { useContext, useState } from 'react';
import userContext from '../../userContext';
import axios from 'axios';

export default function Account () {

    const {user} = useContext(userContext)

    const initialForm = {
        first_name: '',
        last_name: '',
        email: '',
        owner: user[0]?.owner || false,
        host: user[0]?.host || false,
        password: ''
    }

    const [editMode, toggleEditMode] = useState(false)
    const [editForm, setEditForm] = useState(initialForm)
    const [passwordMatch, setPasswordMatch] = useState()
    const [specialCharacters, setSpecialCharacters] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleEdit = () => toggleEditMode(true)
    const cancelEdit = () => toggleEditMode(false)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.id]: event.target.value})
    }

    const validatePw = () => {
        const hasSpecialCharacter = () => {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(editForm.password)}
        if (hasSpecialCharacter()) {
            setSpecialCharacters(true)
        } else {
            setSpecialCharacters(false)
        }
    }

    const handleCheckboxes = (event) => {
        if (event.target.checked) {
            setEditForm({...editForm, [event.target.id]: true})
        } else {
            setEditForm({...editForm, [event.target.id]: ''})
        }
    }

    const handleConfirm = (event) => setConfirmPassword(event.target.value)

    const matchPws = () => {
        if (editForm.password === confirmPassword) {
            setPasswordMatch(true)
        } else {setPasswordMatch(false)}
    }

    const handleSave = () => {
        if ( editForm.password == '') {
            setPasswordMatch(true)
            setSpecialCharacters(true)
        } else {
            matchPws()
            validatePw()
        }
        const filteredData = Object.fromEntries(Object.entries(editForm).filter(([_, value]) => value !== ''))
        if (passwordMatch && specialCharacters) {
            const update = axios.patch(`http://localhost:3001/users/${user[0]._id}`, filteredData)
            setPasswordMatch()
            setSpecialCharacters()
        }
    }

    return (
        <div>
            <h1>{user[0].first_name}'s Account</h1>
            <button type='button' onClick={handleEdit} >Edit</button>
            { editMode ? <button type='button' onClick={cancelEdit} >Cancel</button> : null}

            <dl>
                <dt>Name</dt>
                { editMode ? 
                <div>
                    <input type='text' id='first_name' value={editForm.first_name} onChange={handleChange} placeholder={user[0].first_name} /> <input type='text' id='last_name' value={editForm.last_name} placeholder={user[0].last_name} onChange={handleChange} />
                </div> :
                <dd>{user[0].first_name} {user[0].last_name}</dd>
                 }

                <dt>Username</dt>
                <dd>{user[0].username}</dd>

                <dt>Password</dt>
                { editMode ?
                <div>
                    <input type='password' id='password' value={editForm.password} placeholder={user[0].password} onChange={handleChange} />
                    <label htmlFor='confirm_password'>Confirm password</label>
                    <input type='password' id='confirm_password' onChange={handleConfirm} />
                </div>
                : <dd> <input type='password' readOnly value={user[0].password} /></dd>}
                { passwordMatch === false ? <p>Passwords must match</p> : null}
                { specialCharacters === false ? <p>Password must contain at least one special character</p>: null}

                <dt>Email</dt>
                { editMode ? 
                    <input type='email' id='email' placeholder={user[0].email} value={ editForm.email} onChange={handleChange} /> : <dd>{user[0].email}</dd>}

                <dt>Account type</dt>
                { editMode ? 
                    <div>
                        <label htmlFor='owner'>Venue owner?</label>
                        <input type='checkbox' id='owner' onChange={handleCheckboxes} checked={editForm.owner } />
                        <label htmlFor='host'>Event host?</label>
                        <input type='checkbox' id='host' onChange={handleCheckboxes} checked={editForm.host } />
                    </div> :
                    <dd>{ user[0].owner && user[0].host ?
                        'Venue owner/event hoster' :
                        user[0].owner ?
                        'Venue owner' :
                        'Event hoster' }</dd>}
            </dl>
            <button type='button' onClick={handleSave} >Save changes</button>
        </div>
    )
}
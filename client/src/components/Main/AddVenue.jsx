import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AddVenue () {

    let { id } = useParams()

    const initialState = {
        name: '',
        location: '',
        type: [],
        price: '',
        owner: id
    }

    const initialType = {
        environment: '',
        type: ''
    }

    const [formState, setFormState] = useState(initialState)
    const [typeState, setTypeState] = useState(initialType)
    const [locations, setLocations] = useState([])
    const [types, setTypes] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [numberOfImages, setNumberOfImages] = useState(1)

    const getLocations = async() => {
        const response = await axios.get('http://localhost:3001/locations')
        setLocations(response.data)
    }

    const getTypes = async() => {
        const response = await axios.get('http://localhost:3001/types')
        setTypes(response.data)
    }

    useEffect(() => {
        getLocations()
        getTypes()
    }, [])

    const handleImageNumber = () => {
        let number = numberOfImages + 1
        setNumberOfImages(number)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        setSubmitted(false)
    }

    const handleCheckboxes = (event) => {
        const checkboxValue = event.target.value
        if (event.target.checked) {
            setFormState({...formState, type: [...formState.type, checkboxValue]})
        } else {
            setFormState({...formState, type: formState.type.filter(value => value !== checkboxValue)})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/venues', formState)
        setFormState(initialState)
        setSubmitted(true)
    }

    const handleTypeChange = (event) => {
        setTypeState({...typeState, [event.target.id]: event.target.value})
    }

    const handleTypeSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/types', typeState)
        setTypeState(initialType)
        getTypes()
    }

    if (types && locations) {
        return (
            <div className="add-venue-page">
                <div className="text-title-24">Register your venue!</div>

                <form className='add-venue' onSubmit={handleSubmit} >
                    <label htmlFor='name'>Name of venue:</label>
                    <input type='text' id='name' onChange={handleChange} value={formState.name} />

                    <label htmlFor='street_address'>Street address:</label>
                    <input type='text' id='street_address' onChange={handleChange} value={formState.street_address} />
    
                    <label htmlFor='location'>Location:</label>
                    <select id='location' onChange={handleChange} value={formState.location} >
                        <option value='' disabled defaultValue>Select a location</option>
                        { locations.map(location => 
                            <option key={location._id} value={location._id}>{location.city}, {location.state}, {location.country}</option>
                        ) }
                    </select>
    
                    <label htmlFor='type'>Type of venue:</label>
                    <div id='type'>
                        { types.map(type => 
                            <div key={type._id}>
                                <input type='checkbox' id={type._id} value={type._id} onChange={handleCheckboxes} checked={formState.type.includes(type._id)} />
                                <label htmlFor={type._id}>{type.environment} {type.type}</label>
                            </div>
                        ) }
                    <label htmlFor='add-type'>Other:</label>
                    <div id='add-type'>
                        <select id='environment' onChange={handleTypeChange} value={typeState.environment} >
                            <option value='' defaultValue>Select an environment</option>
                            <option value='indoor'>Indoor</option>
                            <option value='outdoor'>Outdoor</option>
                            <option value='both'>Both</option>
                        </select>
                        <input type='text' id='type' onChange={handleTypeChange} value={typeState.type} />
                        <button type='submit' onSubmit={handleTypeSubmit} >Add</button>
                    </div>
                    </div>
    
                    <label htmlFor='price'>Average price per hour (in USD):</label>
                    <input type='number' id='price' onChange={handleChange} value={formState.price} />

                    <label htmlFor='images'>Pictures of venue:</label>
                    <div id='images'>
                        {[...Array(numberOfImages)].map((_, index) => (
                            <input key={index} id='images{index}' />
                        ))}
                        <button type='button' onClick={handleImageNumber}>+</button>
                    </div>

                    <p>Please review your details before submitting this form to ensure everything is correct.</p>
                    <button type='submit'>Register</button>

                </form>

                { submitted ? <h3>Congratulations! You've registered your event space!</h3> : null}
            </div>
        )
    } else {
        return <h1>Loading</h1>
    }
}
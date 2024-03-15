import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SpaceType (props) {
    let navigate = useNavigate()

    const [types, setTypes] = useState([])

    useEffect(() => {
        const getTypes = async() => {
            const response = await axios.get('http://localhost:3001/types')
            setTypes(response.data)
        }
        getTypes()
    }, [])
    console.log(types)

    const showType = (type) => {
        navigate(`${type._id}`)
    }
    
    if (!types) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="location-list-page">
                <div className="search-list-title">Space Types</div>
                <div className="search-list-grid">
                    {types.map((type) => (
                        <div className="search-list-card" onClick={() => showType(type)} key={type._id}>
                            <div className="list-card-image-container">
                                <img src={type.image} alt={type.type} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="list-card-result-info">
                                    <div className="text-title-28">{type.type}</div>
                                    <div className="text-caps-16">{type.environment}</div>
                                </div>
                                <div className="list-card-button-container">
                                    <div className="list-card-button-explore">explore</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}
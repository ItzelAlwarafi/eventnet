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
        navigate(`${type.id}`)
    }
    
    if (!types) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="spacetype-list-page">
                <div className="text-title-32">Space Types</div>
                <div className="search-list-grid">
                    {types.map((type) => (
                        <div className="search-list-card" onClick={() => showType(type)} key={type.id}>
                            {/* <img src={type.img} alt={type.name} className="list-card-image"/> */}
                            <div className="text-title-20">{type.type}</div>
                            <div className="text-standard-16">{type.environment}</div>
                            <button className="list-card-button-explore">explore</button>
                            {/* onClick move to list of venues of this space type */}
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}
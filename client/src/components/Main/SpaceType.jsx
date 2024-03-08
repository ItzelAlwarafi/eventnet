import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function SpaceType (props) {
    let navigate = useNavigate()

    const showType = (type) => {
        navigate(`${type.id}`)
    }
    
    return (
        <div className='spacetype-list-page'>
            <div className='search-list-title'>Space Types</div>
            <div className="search-list-grid">
                {props.types.map((type) => (
                    <div className="search-list-card" onClick={() => showType(type)} key={type.id}>
                         {/* <img src={type.img} alt={type.name} className="list-card-image"/> */}
                        <div className="list-card-title">{type.type}</div>
                        <div className="list-card-subtitle">{type.environment}</div>
                        <button className="list-card-button-type">explore</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
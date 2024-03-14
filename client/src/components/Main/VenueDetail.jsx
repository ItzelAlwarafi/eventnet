import {useNavigate, useParams} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareFromSquare} from '@fortawesome/pro-duotone-svg-icons'
import {faCircleHeart as Liked } from '@fortawesome/pro-regular-svg-icons'
import {faCircleHeart as Unliked, faStarSharp } from '@fortawesome/pro-solid-svg-icons'
import userContext from '../../userContext'

export default function Venue () {
    // let navigate = useNavigate()

    const {user, setUser} = useContext(userContext)
    const {loggedIn} = useContext(userContext)
    const [venue, setVenue] = useState()
    let {id} = useParams()
    const [liked, setLiked] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const getVenues = async() => {
            const response = await axios.get(`http://localhost:3001/venues/id/${id}`)
            setVenue(response.data)
        }
        getVenues()
    }, [])
    console.log(venue)

    useEffect(() => {
        if (loggedIn && user[0].venues_liked.includes(id)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [user])

    const handleLike = async() => {
        if (liked && loggedIn) {
            const updatedArray = user[0].venues_liked.filter(item => item !== id)
            const data = {venues_liked: updatedArray}
            const update = await axios.patch(`http://localhost:3001/users/${user[0]._id}`, data)
            setUser([{...user[0], venues_liked: updatedArray}, user.slice(1)])
            setLiked(false)
        } else if (!liked && loggedIn) {
            const updatedArray = [...user[0].venues_liked, id]
            const data = {venues_liked: updatedArray}
            const update = await axios.patch(`http://localhost:3001/users/${user[0]._id}`, data)
            setUser([{...user[0], venues_liked: updatedArray}, user.slice(1)])
            setLiked(true)
        }
    }

    const showBooking = () => {
        navigate('booking')
    }

    if (venue) {
    return (
        <div className="venue-detail-page">
            <img src={venue.img[0]} alt={venue.name} className="list-card-image"/>
            {/* make this a carousel of the image array */}
            <div className="detail-header-container">
                <div className="text-title-32">{venue.name}</div>
                <FontAwesomeIcon icon={faShareFromSquare} />
                { liked ? <FontAwesomeIcon icon={Liked} onClick={handleLike} /> : <FontAwesomeIcon icon={Unliked} onClick={handleLike} /> }
                <div className="text-caps-16">{venue.location.city}, {venue.location.state}, {venue.location.country}</div>
                <div className="text-standard-14">{venue.street_address}</div>
                <div className="text-standard-12">Hosted by {venue.owner.first_name ? venue.owner.first_name  : null} {venue.owner.last_name}</div>
                <div className="detail-header-rentals">
                    <div className="header-stars">
                        {[...Array(venue.rating)].map((_, index) =>
                        <FontAwesomeIcon key={index} icon={faStarSharp} /> )}</div>
                </div>
            </div>
            <div className="detail-body-container">
                { venue.type.map((type, index) => 
                    <div key={index} className="text-title-24-border">{type.environment} {type.type}</div>)}
                <div className="text-standard-14">Venue description goes here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perferendis asperiores explicabo corrupti! Atque est, consequatur doloremque aut maxime ipsa aliquid consequuntur asperiores molestiae aspernatur facere molestias suscipit, exercitationem rerum.</div>
                <div className="detail-body-bubbles">
                    <div className="text-bubble-black">Example</div>
                    <div className="text-bubble-black">Example</div>
                    <div className="text-bubble-black">Example</div>
                </div>
                <div className="detail-body-bubbles">
                    <div className="text-bubble-white">Example</div>
                    <div className="text-bubble-white">Example</div>
                    <div className="text-bubble-white">Example</div>
                </div>
            </div>
            <div className="detail-body-container">
                <div className="text-title-20-border">The Space</div>
                <div className="text-body-split">
                    <div className="text-standard-14" itemID="text-align-Right">
                        <div>Space:</div>
                        <div>Capacity: {venue.max_ppl} people</div>
                        <div>Handicap Accessible:</div>
                        <div>Amenities</div>
                    </div>
                    <div className="text-standard-14" itemID="text-align-Left">
                        {/* <div>{venue.type}</div> */}
                        <div>###</div>
                        <div>Y/N</div>
                        <div>List</div>
                    </div>
                </div>
            </div>
            <div className="detail-body-container">
                <div className="text-title-20-border">Special Features</div>
                <div className="text-standard-14" itemID="flexgrid-list">
                    <div>Example</div>
                    <div>Example</div>
                    <div>Example</div>
                    <div>Example</div>
                </div>
            </div>
            <div className="detail-body-container">
                <div className="text-title-20-border">Rental Requirements</div>
                <div className="text-body-split">
                    <div className="text-standard-14" itemID="text-align-Right">
                        <div>Minimum Rental Period:</div>
                        <div>Average Cost:</div>
                    </div>
                    <div className="text-standard-14" itemID="text-align-Left">
                        <div># hours</div>
                        <div>{venue.price} / hour</div>
                    </div>
                </div>
                <div className="detail-venue-booking" onClick={showBooking} >Book venue</div>
                <div className="text-standard-14" itemID="flexgrid-list">
                    <div className="icon-click-box">
                        <div>icon</div>
                        <div className="text-standard-14">Venue Rules</div>
                        {/* onClick would expand or popup */}
                    </div>
                    <div className="icon-click-box">
                        <div>icon</div>
                        <div className="text-standard-14">Cancellation Policy</div>
                    </div>
                </div>
            </div>
            <div className="detail-body-container">
                <div className="text-title-20-border">Similar Venues</div>
                <div className="text-standard-14">Carousel here</div>
                {/* import component for this? */}
            </div>
            <button className="detail-button-back">back to search</button>
        </div>
    ) } else { return (
        <div className="loading">Loading...</div>
    )}
}
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Venue (props) {
    // let navigate = useNavigate()

    const [venue, setVenue] = useState({})
    let {id} = useParams()

    useEffect(() => {
        const getVenues = async() => {
            const response = await axios.get(`http://localhost:3001/venues/${id}`)
            setVenue(response.data)
        }
        getVenues()
    }, [])

    if (venue) {
    return (
        <div className="venue-detail-page">
            <img src={venue.img[0]} alt={venue.name} className="list-card-image"/>
            {/* make this a carousel of the image array */}
            <div className="detail-header-container">
                <div className="text-title-32">{venue.name}</div>
                {/* Like and Share icons / buttons; add to container w header title */}
                <div className="text-caps-16">{venue.location}</div>
                <div className="text-standard-14">{venue.street_address}</div>
                <div className="text-standard-12">Hosted by {venue.owner}</div>
                <div className="detail-header-rentals">
                    <div className="header-stars">Star Ranking here</div>
                    <div className="text-standard-14" itemID="text-align-Right">### Reviews this Year</div>
                </div>
            </div>
            <div className="detail-body-container">
                <div className="text-title-24-border">{venue.type}</div>
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
                        <div>Capacity:</div>
                        <div>Handicap Accessible:</div>
                        <div>Amenities</div>
                    </div>
                    <div className="text-standard-14" itemID="text-align-Left">
                        <div>{venue.type}</div>
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
                        <div>{venue.price}</div>
                    </div>
                </div>
                <div className="detail-venue-booking">Inquire</div>
                {/* booking button / form link here */}
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
            <div className="detail-body-container">
                <div className="text-title-20-border">Reviews</div>
                <div className="text-standard-14">See Wireframe</div>
                {/* import component for this? */}
            </div>
            <button className="detail-button-back">back to search</button>
        </div>
    ) } else { return (
        <div className="loading">Loading...</div>
    )}
}
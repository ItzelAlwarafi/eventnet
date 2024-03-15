import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SpaceType from './SpaceType'
import Venue from './Venue'
import VenueDetail from './VenueDetail'
import BookingForm from './BookingForm'
import AddVenue from './AddVenue'
import UserSignUpLogIn from './UserSignUpLogIn'
import Favourited from './Favourited'
import Owned from './Owned'
import Account from './Account'
import Location from './Location'
import LocationDetails from './LocationDetails'
import TypeDetails from './TypeDetails'

export default function Main () {
    return (
        <div>
           
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<UserSignUpLogIn />} />
                <Route path='/locations' element={<Location />} />
                <Route path='/locations/:id' element={<LocationDetails />} />
                <Route path='/types' element={<SpaceType />} />
                <Route path='/types/:id' element={<TypeDetails />} />
                <Route path='/venues' element={<Venue />} />
                <Route path='/venues/:id' element={<VenueDetail />} />
                <Route path='/venues/:id/booking' element={<BookingForm />} />
                <Route path='/account/:id' element={<Account />} />
                <Route path='/account/:id/register-venue' element={<AddVenue />} />
                <Route path='account/:id/venues' element={<Owned />} />
                <Route path='account/:id/favourites' element={<Favourited />} />
            </Routes>
        </div>
    )
}
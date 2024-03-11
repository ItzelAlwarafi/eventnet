import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SpaceType from './SpaceType'
import Venue from './Venue'
import BookingForm from './BookingForm'
import AddVenue from './AddVenue'
import UserSignUpLogIn from './UserSignUpLogIn'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<UserSignUpLogIn />} />
                <Route path='/locations' element={<Location />} />
                <Route path='/type' element={<SpaceType />} />
                <Route path='/venues/:id' element={<Venue />} />
                <Route path='/venues/:id/booking' element={<BookingForm />} />
                <Route path='/account/:id' />
                <Route path='/account/:id/register-venue' element={<AddVenue />} />
            </Routes>
        </div>
    )
}
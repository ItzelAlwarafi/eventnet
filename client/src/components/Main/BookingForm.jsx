import { useRef } from 'react'

export default function BookingForm () {

        const nameRef = useRef()
        const phoneNumberRef = useRef()
        const emailRef = useRef()
        const addressRef = useRef()
        const bookDateRef = useRef()
        const detailRef = useRef()
    
        const handleSubmit = (event) => {
            event.preventDefault()
    
            const formData = {
                name: nameRef.current.value,
                phoneNumber: phoneNumberRef.current.value,
                email: emailRef.current.value,
                address: addressRef.current.value,
                bookDate: bookDateRef.current.value,
                detail: detailRef.current.value
            }
    
            console.log(formData)
    
            nameRef.current.value = ''
            phoneNumberRef.current.value = ''
            emailRef.current.value = ''
            addressRef.current.value = ''
            bookDateRef.current.value = ''
            detailRef.current.value = ''
        }
    
    
        return (
            <>
            <div className='BookContainer'>
    
           
                <h1>Book Venue</h1>
    
                <form className='formContainer' onSubmit={handleSubmit}>
                   
    
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={nameRef} required />
    
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" ref={phoneNumberRef} required />
    
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" ref={emailRef} required />
    
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" ref={addressRef} required />
                    
                    <label htmlFor="bookDate"> Date of Event :</label>
                    <input  type='date' id="bookDate" ref={bookDateRef} required />
    
                    <label htmlFor="detail">Detail:</label>
                    <textarea id="detail" ref={detailRef} required></textarea>
    
                    <button id='bookBtn'type="submit">Book</button>
                </form>
                </div>
            </>
        )
    }
    






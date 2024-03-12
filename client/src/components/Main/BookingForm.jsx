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
                   
                <input type="text" id="name" placeholder='Name' ref={nameRef} required />

               
                        <input type="tel" id="phoneNumber" placeholder='Phone Number' ref={phoneNumberRef} required />


                        <input type="email" id="email" placeholder='email' ref={emailRef} required />

                        <input type="text" id="address" placeholder='address' ref={addressRef} required />


                        <input  type='date' id="bookDate"  ref={bookDateRef} required />


                        <textarea id="detail" placeholder='Details' ref={detailRef} required></textarea>

                        <button id='bookBtn'type="submit">Book</button>
                </form>
                </div>
            </>
        )
    }
    






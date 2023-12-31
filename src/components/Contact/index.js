import Loader from 'react-loaders' ;
import './index.scss' ;
import AnimatedLetters from '../AnimatedLetters' ;
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef() 
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
         }, 3000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'default_service',
                'template_zmb37od',
                refForm.current,
                'a_0K29hmYiUtXzvY-'
            )
            .then(
                () => {
                    alert('Message was sent successfully!')
                    // window.location.reload(false)
                },
                () => {
                    alert('Message was not sent, please try again')

                }
            )
            
     }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','O','N','T','A','C','T',' ', 'M','E']}
                    idx = {15}
                    />
                </h1>
                <p>Have a coding conundrum or a mind-boggling bug that even Fortran couldn't handle? Don't worry, I'm here to save the day! Feel free to reach out, and I'll rescue your project faster than C++ compiles. Let's collaborate on some 'byte'-sized wizardry and create code that'll leave even Git in awe! 😉🚀
                </p>

                <div className='contact-form' >
                    <form ref = {refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />

                            </li>
                            <li className='half'> 
                                <input placeholder ="Email" type = "email" name = " Email" required />
                            </li>
                            <li >
                                <input placeholder='Subject' type = 'text' name = 'subject' required />
                            </li>
                                <li>
                                <textarea 
                                placeholder= "Message"
                                name="Message"
                                required> </textarea> 
                                </li>
                            <li>
                                <input type='submit' className='flat-button' value = 'SEND' /> 
                            </li>
                        </ul>
                    </form>
                </div>                
            </div>
            <div className='info-map'>
                Aditya Rajesh Bawangade
                <br/>
                Nashik, Maharashtra
                <br/>
                <span>adityab1729@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[19.951658595664075, 73.77043528468775]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[19.951658595664075, 73.77043528468775]}>
              <Popup>I live here! Don't come without a gift 😁</Popup>
            </Marker>
          </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
    </>
    )
}
export default Contact
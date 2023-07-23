import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faPython,
  
  faJsSquare,
  faReact,
  faHtml5,
  faCuttlefish,
  faJs,
  faGit,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YourImage from '../../assets/images/IMP-removebg-preview.png'
import './index.scss'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
         }, 3000)
     }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','B','O','U','T',' ', 'M','E']}
                    idx={15} />

                </h1>
                <p>
                Meet Aditya Rajesh Bawangade, the tech-savvy dynamo from IIT Goa! 💻 With a flair for innovation, he effortlessly crafts websites using the power of ReactJS, SCSS, and HTML. Whether it's designing pixel-perfect layouts or solving coding conundrums, Aditya's skills are top-notch! 🚀 With a knack for blending technology and creativity, Aditya is the ultimate "web wizard" who brings magic to every project he touches! ✨
                </p>
                <p>
                With a passion for both technology and poetry, he's the "byte-sized" poet who lifts spirits and algorithms with equal ease. When he's not conquering the coding realm, you'll find him immersed in quantum mysteries and creating drama (on and off the stage)!🎭 Whether it's programming or pulling off the perfect lift, Aditya is always one step ahead, embracing challenges with a smile! 😊                </p>
            <p>Also, the image in the bottom right corner is an A.I.Generated Manhwa of Myself!🤙🏻</p>
            </div>

            {/* <div className='text-zone'>
                <h1><AnimatedLetters letterClass={letterClass}
                strArray={['H','i',' ']}
                idx = {15} /><br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={['I',"'",'m', ' ', 'a']}
                idx = {15} /> 
                <img src = {LogoTitle} alt='developer' />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx = {15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx = {15} /></h1>
            </div> */}

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCuttlefish} color = "#333" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color = "#333" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color = "#333" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color = "#333" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color = "#333" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJs} color = "#333" />
                    </div>
                </div>
            </div>
            <img
          src={YourImage} // Replace 'YourImage' with the image path
          alt='Your Image'
          className='your-image'
        />
        </div>
        <Loader type='pacman' />
        </>
        
    )
}

export default About
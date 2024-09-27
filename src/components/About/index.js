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
                <p>Hello, I’m <strong>Aditya Rajesh Bawangade</strong>, a final-year <strong>Computer Science and Engineering</strong> student at <strong>IIT Goa</strong>. I have experience in system optimization, debugging, and software development, having interned at <strong>Siemens EDA</strong>, where I worked on improving performance with data structures like Red-Black trees. I’m also a <strong>Teaching Assistant</strong> for Python, designing problem sets for first-year students. In addition to my academic and professional pursuits, I’ve held leadership roles, including <strong>Placement Coordinator</strong> and <strong>Hostel Council</strong> member. Let’s connect!</p>


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

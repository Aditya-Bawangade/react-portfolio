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
                <p>Hey! I’m <strong>Aditya Rajesh Bawangade</strong>, currently in my final year at <strong>IIT Goa</strong>, where I’m studying <strong>Computer Science and Engineering</strong>. My journey so far? A combination of coding, debugging, optimizing, and occasionally surviving on a lot of coffee.</p>

        <p>I’ve been fortunate enough to intern with <strong>Siemens EDA</strong>, where I dove deep into system optimization and code analysis. My highlight? Building a Red-Black tree (trust me, it’s cooler than it sounds) that made their system faster and more efficient. Oh, and I also documented everything (future interns, you’re welcome!).</p>

        <p>When I’m not working on projects, I’m helping first-year students tackle <strong>Python</strong> as a <strong>Teaching Assistant</strong>. Designing coding challenges is pretty fun, especially when you get to balance tricky problems with making sure no one ends up completely confused.</p>

        <h2>My Skills</h2>
        <ul>
            <li><strong>Programming:</strong> C, C++, Python, Haskell, Assembly (yes, really)</li>
            <li><strong>Web:</strong> HTML, CSS, JavaScript, React.js (making things look nice online)</li>
            <li><strong>Hardware:</strong> System Verilog, MIPS Assembly (for the hands-on stuff)</li>
            <li><strong>Tools:</strong> Vim, Linux, GitHub (just your usual tech toolbox)</li>
        </ul>

        <p>Somehow, in between coding marathons and debugging, I’ve also managed to take on roles like <strong>Placement Coordinator</strong> and being on the <strong>Hostel Council</strong>. These have taught me how to juggle multiple responsibilities—whether it's organizing job placements or making sure hostel life doesn’t fall apart!</p>

        <h2>A Bit More About Me</h2>

        <p>When I’m not buried in code, I love unwinding by baking. There’s something about making the perfect cake that feels almost as satisfying as debugging a piece of stubborn code. I also dabble in photography and enjoy capturing random little moments (usually sunsets or cool urban vibes).</p>

        <p>If I’m hanging out with friends, you’ll probably find me in the middle of a heated game of <strong>Catan</strong>. Spoiler: I’m not that great at it, but it’s fun anyway. And when stress levels peak (hello, exams!), you can bet there’s a banana close by to keep me going—it’s kind of become my thing.</p>

        <p>So yeah, that’s me in a nutshell. If you ever want to chat about tech, trading recipes, or even challenge me to a board game, I’m all ears!</p>

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

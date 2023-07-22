import LogoTitle from '../../assets/images/logo-s.png' ;
import {useState} from 'react' ;
import {Link} from'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b','d','e','v','e','l','o','p','e','r','.']
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm 
                <img src = {LogoTitle} alt='developer' />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx = {15} />
                <br/>
                web developer</h1>
                <h2> Idiot1/ Idiot2/ Idiot3/Bad Friend</h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home
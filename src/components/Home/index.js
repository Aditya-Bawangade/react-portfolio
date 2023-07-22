import LogoTitle from '../../assets/images/logo-s.png' ;
import {useEffect, useState} from 'react' ;
import {Link} from'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b',' ' ,'d','e','v','e','l','o','p','e','r','.']
    useEffect(() => {
       setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    // useEffect(() => {
        
    //     let timeoutId = setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
        
    //     return () => {
    //                 clearTimeout(timeoutId)
    //             }
    // }, [])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1><AnimatedLetters letterClass={letterClass}
                strArray={['H','i',' ']}
                idx = {3} /><br/> <AnimatedLetters letterClass={letterClass}
                strArray={['I',"'",'m', ' ', 'a']}
                idx = {5} /> 
                <img src = {LogoTitle} alt='developer' />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx = {15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx = {13} /></h1>
                <h2> Idiot1/ Idiot2/ Idiot3/Bad Friend/ Bad Son/ Bad Human/Bad Student</h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home
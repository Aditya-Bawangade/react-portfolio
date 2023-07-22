import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A','B','O','U','T',' ', 'M','E']}
                    idx={7} />

                </h1>
                <p>
                For anyone watching, you don't need to create an array with all the letters in, that will be painfully slow for longer sentences. You can just do "your string".split("") and it will create the array of characters for you
                </p>
                <p>
                For anyone watching, you don't need to create an array with all the letters in, that will be painfully slow for longer sentences. You can just do "your string".split("") and it will create the array of characters for you
                </p>
            </div>
        </div>
    )
}

export default About
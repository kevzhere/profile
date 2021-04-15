import React from 'react';
import { Typewriter } from './typewriter/Typewriter';
import profImg from './assets/prof.jpg';

const Home = () => {
  console.log('prof', profImg);
  
  return (
    <>
      <div className='container'>
        <div className='small-box'>
          <img className='profile-image' src={profImg} alt='my pic'/>
        </div>
        <div>
          <div style={{ color: '#d0d0d0' }}>
            <h1>My name is Kevin </h1>
          </div>
          <div>
            <Typewriter 
              startPhrase='I am a'
              speed='500' 
              words={['Software Engineer', 'Front-end Developer', 'Full Stack Developer']} 
              textColor='#d0d0d0'
              reverse={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
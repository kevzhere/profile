import React from 'react'
import { Typewriter } from './typewriter/Typewriter'

const Home = () => {
  
  return (
    <>
      <div>
        <h1>Hi there, my name is Kevin </h1>
      </div>
      <div className='intro'>
        <h1>I am a </h1>
        <Typewriter 
          speed='500' 
          words={['software engineer', 'full-stack developer', 'guy...?']} 
          reverse={true}
        />
      </div>
    </>
  )
}

export default Home;
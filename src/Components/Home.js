import React from 'react'
import ola from '../assets/ola.jpeg'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import './Home.css'
function Home() {
  return (
    <div>
    <div>
    <article>
    <main>
    <img className='pfp' alt="pfp" src={ola} width="200px"  ></img> 
    </main>
    <h2> Olayinka Fakanbi </h2>
    <h4>Full Stack Software Engineer</h4>
    </article>
    </div>
    <div>
       <a href="mailto:fakanbiomowunmi@gmail.com"><button className='btn'>Email Me</button></a> 
    </div>
    <br/>
    <div className='socio'>
        <img src={insta} width="50px" height="50px" />
        <img src={linkedin} width="50px" height="50px" />
        <img src={github} width="50px" height="50px" />
        {/* <img src={insta} width="50px" height="50px" />
        <img src={insta} width="50px" height="50px" /> */}
       
    </div>
    {/* <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div> */}
    
    </div>
  )
}

export default Home
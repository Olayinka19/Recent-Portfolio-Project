import React from 'react'
import ola from '../assets/ola.jpeg'
import insta from '../assets/insta.png'
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import eye from '../assets/eye.png'
import os from '../assets/os.png'
import code from '../assets/code.png'
import py from '../assets/py.png'

import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import './Home.css'
function Home() {
  return (
    <div>
    <div className='container'>
    <img className='pfp' alt="pfp" src={py} width="200px"></img> 
    <img className='pfp' alt="pfp" src={img1} width="200px"  ></img> 
    <img className='pfp' alt="pfp" src={img3} width="200px"  ></img> 
    <img className='pfp' alt="pfp" src={img4} width="200px"  ></img> 
    <img className='pfp' alt="pfp" src={os} width="200px"  ></img> 
    <img className='pfp' alt="pfp" src={code} width="200px"  ></img> 
    </div>
    <div>
    <article>
    <main>
    {/* <img className='pfp' alt="pfp" src={eye} width="200px"  ></img>  */}
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
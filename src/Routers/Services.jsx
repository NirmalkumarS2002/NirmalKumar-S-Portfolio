import React from 'react'
import "./Services.css"
import img4 from "../assets/design.png";
import img6 from "../assets/project3.png";
import img5 from "../assets/project2.png";
import img7 from "../assets/project4.png";
import img8 from "../assets/project5.png";
import img9 from "../assets/project6.png";


export default function Services() {
  return (
    <div>
              <h1>Services</h1>
      <div className='Sermain'>

          <div>
            <i class="fa-thin fa-computer"></i>
            <img src={img4} alt=""/>
            <h2>Web Design</h2>
             <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>

          <div>
            <img src={img5} alt=""/>
            <h2>Fully Responsive</h2>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>

          <div>
            <img src={img6} alt=""/>
            <h2>Development</h2>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>

          <div>
            <img src={img7} alt=""/>
            <h2>Creative Design</h2>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>

          <div>
            <img src={img8} alt=""/>
            <h2>Animaiton</h2>
            <p>Visual effects and graphic motion.Utilized as effective communication tools</p>
          </div>

          <div>
            <img src={img9} alt=""/>
             <h2>Branding</h2>
             <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>

          {}
          
      </div>
    </div>
  )
}

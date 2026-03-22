import React, { useRef, useState } from 'react'
import nirmal from "../assets/nirmal.jpeg";


import "./Profile.css"


export default function Profile() {

  return (
    <div className='profile'>
    <img src={nirmal}  alt="kumar"   className='pic'/>
    <h2>Nirmalkumar</h2>
    </div>
  )
}

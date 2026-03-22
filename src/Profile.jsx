import React, { useRef, useState } from 'react'
import nirmal from "../assets/nirmal.jpeg";


import "./Profile.css"


export default function Profile() {

  return (
    <div className='profile'>
    {/* <img className='pic' src="..\assets\samplee.jpeg" alt="" /> */}
    <img src={nirmal} alt="kumar" />
    <h2>Nirmalkumar</h2>
    </div>
  )
}

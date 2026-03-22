import React, { useRef, useState } from 'react'
import img2 from "../assets/nirmal.jpeg";


import "./Profile.css"


export default function Profile() {

  return (
    <div className='profile'>
    {/* <img className='pic' src="..\assets\samplee.jpeg" alt="" /> */}
    <img src={img2} alt="" />
    <h2>Nirmalkumar</h2>
    </div>
  )
}

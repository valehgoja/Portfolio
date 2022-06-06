import React from 'react'
import photo from './images/photoDeveloper.png'

export default function About() {
  return (
    <div className='motherDiv'>
        <div className='aboutDiv'>
            <img className='photoDeveloper' src={photo}/>
            <div className='about-info'>
                <p><span className='title-bold' >Name:</span> <span>Valeh Gojayev</span></p>
                <p><span className='title-bold' >Profile:</span> <span>Full stack developer</span></p>
                <p><span className='title-bold' >Email:</span> <span>qocayevvaleh96@gmail.com</span></p>
                <p><span className='title-bold' >Phone:</span> <span>+994-70-8888015</span></p>
            </div>
        <div>
        <p className='skillTag'>Skill</p>  
        <div className='JavaSE'>
            Java SE 80%
            <div className='JavaBar'><div className='JavaBar2'></div></div>
        </div>  
        <div className='JavaEE'>
            Java EE 65%
            <div className='JavaEEBar'><div className='JavaEEBar2'></div></div>
        </div>   
        <div className='Office'>
            Microsoft OFFICE 90%
            <div className='OfficeBar'><div className='OfficeBar2'></div></div>
        </div>  
        <div className='FrontEnd'>
            Front-End 70%
            <div className='FrontBar'><div className='FrontBar2'></div></div>
        </div>   
        </div>

<div className='line'></div>
        <div className='title-about'>
            <h1>About me</h1>
            Hi, my name is Valeh.
             My main goal is to be a programmer and to meet my goal.
            I want to be able to follow the subject quickly and easily.
             According to this specialty, I am selected from other programs.
        </div>
        </div>
    </div>
  )
}

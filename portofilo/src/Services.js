import React from 'react'
import javaLogo from './images/javaLogo.png'
import frontLogo from './images/frontLogo.png'
import officeLogo from './images/officeLogo.png'


export default function () {
  return (
    <div >

        <div className='forCenter'>
          <div>
       <div className='service-title'>Services</div>
        <div className='line_service'></div>
        <span className='service-info'>Here is a brief description of the services I provide.</span>
        <div className='line_service'></div>
        </div>
        </div>


        <div className='all_service'>
        <div className='service'>
            <div className='card_img'><img className="javaLogo" src={javaLogo}/></div>
        <p className='mini-title'>Java</p>
        <p className='mini-subtitle'>   Creating desktop applications.</p>
        </div>


        <div className='service'>
            <div className='card_img'><img className="frontLogo" src={frontLogo}/></div>
        <p className='mini-title'>Front-End</p>
        <p className='mini-subtitle'>   Creating your web sites.</p>
        </div>


        <div className='service'>
            <div className='card_img'><img className="officeLogo" src={officeLogo}/></div>
        <p className='mini-title'>Office</p>
        <p className='mini-subtitle'>  Support in office work.</p>
        </div>
        </div>
        </div>

  )
}

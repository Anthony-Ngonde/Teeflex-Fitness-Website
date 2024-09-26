import React from 'react'
import './Hero.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


const Hero = ({ data }) => {
    // console.log(data)
  return (
    <div className='hero'>
        <BsArrowLeftCircleFill className='arrow arrow-left'/>
        {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className='slide' />
    })}
        <BsArrowRightCircleFill className='arrow arrow-right'/>
        <span className='indicators'>
            {data.map((_, idx) => {
                return <button key={idx} onClick={null} className='indicator'></button>
            })}
        </span>
    </div>
  )
}

export default Hero
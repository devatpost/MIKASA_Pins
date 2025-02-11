import React from 'react'
import './body.css'
import FilterInput from './FilterInput'
import Pins from './Pins'

const Body = () => {
  return (
    <div className='innerBody'>
        <FilterInput/>
        <Pins/>
    </div>
  )
}

export default Body
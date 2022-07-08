import React from 'react'
import './Glass.css';

export default function Glass(props) {
  return (
    <div className='glass'>
        <img src={require(`${props.item.url}`)} alt='glass' onClick={() => props.handleClick(props.item)}/>
    </div>
  )
}

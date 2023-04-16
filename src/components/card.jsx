import React from 'react'
import './card.css'

const Card = React.forwardRef(({visible}, ref) => {
  return (
    <div ref={ref} className="card card1">
        <p className={`${visible ? 'show' : ''}`}>scroll in text</p>
    </div>
  )
})

export default Card
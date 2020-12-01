import React from 'react'
import "./Review.css"

function Review({title, number}) {
    return (
        <div className="review">
           <h2>{title}</h2>
           <h2>{number}</h2> 
        </div>
    )
}

export default Review

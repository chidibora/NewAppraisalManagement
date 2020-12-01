import React from 'react'
import  "./Generated.css";

function Generated({ title, number }) {
    return (
        <div className="generated">
            <p>{title}</p>
        <h2>{number}</h2>
        </div>
    )
}

export default Generated

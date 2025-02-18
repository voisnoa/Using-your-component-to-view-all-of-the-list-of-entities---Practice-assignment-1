// write the book component code here

import React from 'react'

function BookCard({image, name , author , genre}) {
    return (
        <div className='component'>

            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h2>{author}</h2>
            <h3>{genre}</h3>


        </div>
    )
}

export default BookCard
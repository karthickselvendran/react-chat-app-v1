import React from 'react'
import './singleUserCard.css'
import { randomColor } from 'randomcolor'

const SingleUserCard = ({ userid, email }) => {

    return (
        <div className='singleUserCard'>
            <div className='userImg' style={{ backgroundColor: randomColor() }}>{userid[0]} </div>
            <div className='userDetails'>
                <h3>{userid}</h3>
                <h5 className='grayClr'>{email}</h5>
            </div>
        </div>
    )
}

export default SingleUserCard
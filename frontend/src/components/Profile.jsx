import React from 'react'
import {Link} from 'react-router-dom'


export default ({email, username, profilePic }) =>{

        return(
            <div>
                <img src={profilePic} alt="profilepic"/>
                <h3>{username}</h3>
                <p>{email}</p>
                <Link to="/profile/edit"><button>Edit</button></Link>
            </div>
        )
}
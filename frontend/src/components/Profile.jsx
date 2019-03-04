import React from 'react'
import {Link} from 'react-router-dom'


export default (props) =>{
    console.log(props.user)
    let {profilePic, username, email} = props.user
        return(
            <div>
                <img src={profilePic} alt="profilepic" height="250"/>
                <h3>Username : {username}</h3>
                <p>Email: {email}</p>
                <Link to="/profile/edit"><button>Edit</button></Link>
            </div>
        )
}
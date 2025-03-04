import React from 'react'
import {useParams} from 'react-router-dom';
// Dynamic Routing
const Profile = () => {
const {userId} = useParams();
  return (
    <div>
        <h1>User {userId}</h1>
      
    </div>
  )
}

export default Profile

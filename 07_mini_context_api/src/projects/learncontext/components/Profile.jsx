import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)  

    return (
        <div>
            <h1>Profile Page</h1>
            {!user && <h2>Please Login</h2>}
            { user && 
                <h2>Welcome {user.username}</h2>

            }
        </div>
    )
}

export default Profile
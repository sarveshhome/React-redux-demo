import React,{ useContext} from "react";

import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <h1>Please log in to view your profile</h1>;
    }

    return (
        <div>
            <h1>Welcome Profile</h1>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    );
}

export default Profile;
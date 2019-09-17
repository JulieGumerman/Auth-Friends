import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {

    const [friends, setFriends] = useState({friends: []});

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => setFriends({friends: res.data}))
            .catch(err => console.log(err));
    }, [])

                          



    return (
        <>
        <h3>Yay!!! Friends page!!!</h3>
        {friends.friends.map(friend =><h1 key={Date.now()}>{friend.name}</h1>)}  
        </>
    )
}

export default Friends;
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
const Friends = () => {

    const [friends, setFriends] = useState({friends: []});
    const [newFriend, setNewFriend ] = useState({id: "", name: "", age: "", email: ""})

    useEffect(() => {
        getFriends();
    }, [])
            

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", newFriend)
            .then(res => {

                getFriends();
            }
            )
            .catch(res => console.log(res))

    }

    const getFriends = () => {
    
        axiosWithAuth().get("/friends")
            .then(res => setFriends({friends: res.data}))
            .catch(err => console.log(err));

    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});

    }

    const deleteFriend = id => {
            console.log("delete");
            axiosWithAuth().delete(`/friends/${id}`)
            .then(res => getFriends())
            .catch(err => console.log(err));
    }



    return (
        <>
        <h3>Yay!!! Friends page!!!</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" value={newFriend.name} onChange={handleChange}/>
            <input type="text" name="age" placeholder="age" value={newFriend.age} onChange={handleChange}/>
            <input type="text" name="email" placeholder="age" value={newFriend.email} onChange={handleChange}/>
            <button>addFriend</button>
        </form>
        {friends.friends.map(friend =><FriendCard friend={friend} key={friend.id} deleteFriend={deleteFriend}/>)}  
        </>
    )
}

export default Friends;
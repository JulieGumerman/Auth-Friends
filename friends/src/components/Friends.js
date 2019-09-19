import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";


const Friends = () => {

    const [friends, setFriends] = useState({friends: []});
    const [newFriend, setNewFriend ] = useState({id: "", name: "", age: "", email: ""});
    const [friendUpdate, setFriendUpdate] = useState({id: "", name: "", age: "", email: ""})

    useEffect(() => {
        getFriends();
    }, [])
            

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", newFriend)
            .then(res => {
                getFriends();
            })
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

    const editFriend = (e, friend, friendUpdate) => {
        e.preventDefault();
        axiosWithAuth().put(`/friends/${friend.id}`, friendUpdate)
            .then(res=> {
                getFriends();
            })
            .catch(err => console.log(err));
    }
    
    const handleEdit = (event, friend) => {
        setFriendUpdate({...friend, [event.target.name]: event.target.value})
    }



    return (
        <>
        <h3>Yay!!! Friends page!!!</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" value={newFriend.name} onChange={handleChange}/>
            <input type="text" name="age" placeholder="age" value={newFriend.age} onChange={handleChange}/>
            <input type="text" name="email" placeholder="age" value={newFriend.email} onChange={handleChange}/>
            <button>Add Friend</button>
        </form>

        <div className="card-container">
        {friends.friends.map(friend =>{
        return (
        <FriendCard 
            friend={friend} 
            key={friend.id} 
            deleteFriend={deleteFriend}
            editFriend={editFriend}
            handleEdit={handleEdit}
            friendUpdate={friendUpdate}
            />) })}
         
        </div>

        </>
    )
}

export default Friends;
import React from "react";

const FriendCard = props => {
    return (
        <div className="friend-card" key={props.friend.id}>
            <h3>{props.friend.name}</h3>
            <h6>age: {props.friend.age}</h6>
            <h6>{props.friend.email}</h6>
            <div className="button-box">
                <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
                <button onClick={() => props.editFriend(props.friend.id)}>Edit</button>
            </div>
        </div>
    );
}

export default FriendCard;
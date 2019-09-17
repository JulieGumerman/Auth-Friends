import React from "react";

const FriendCard = props => {
    return (
        <div className="friend-card" key={props.friend.id}>
            <h3>{props.friend.name}</h3>
            <h6>{props.friend.email}</h6>
        </div>
    );
}

export default FriendCard;
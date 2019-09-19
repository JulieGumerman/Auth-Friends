import React from "react";

const FriendCard = props => {


    return (
        <div className="friend-card" key={props.friend.id}>
            <h3>{props.friend.name}</h3>
            <h6>age: {props.friend.age}</h6>
                    <h6>{props.friend.email}</h6>
            <form onSubmit={(e) =>props.editFriend(e, props.friend, props.friendUpdate)}> 
                
            <input type="text" name="name" placeholder={props.friend.name} value={props.friendUpdate.name} onChange={(event) => props.handleEdit(event, props.friend)}/>
            <input type="text" name="age" placeholder={props.friend.age} value={props.friendUpdate.age} onChange={(event) => props.handleEdit(event, props.friend)}/>
            <input type="text" name="email" placeholder={props.friend.email} value={props.friendUpdate.email} onChange={(event) => props.handleEdit(event, props.friend)}/>
            <button><i class="far fa-edit"></i></button>
        </form> 
            <div className="button-box">
                <button onClick={() => props.deleteFriend(props.friend.id)}><i class="far fa-trash-alt"></i></button>
                
            </div>
        </div>
    );
}

export default FriendCard;
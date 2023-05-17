import '../styles/friendList.css'
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
  return (
    <div className="friend-list">
      <ul>
        {friends.map((friend) => 
          <li className="friend1" key={friend.id}>
            <span className={[friend.isOnline.toString()]}></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

FriendList.prototypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList

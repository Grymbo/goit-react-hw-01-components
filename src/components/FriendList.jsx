import '../styles/friendList.css'

const FriendList = ({friends}) => {
  return (
    <div className="friend-list">
      <ul>
        {friends.map((friend) => 
          <li className="friend1" key={friend.id}>
            <span className={[friend.isOnline.toString()]}></span>
            <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default FriendList

import '../styles/profile.css'
import PropTypes from "prop-types";

const Profile = ({username, tag, avatar, location, followers, views, likes}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                
                <p className="name">{username}</p>
    
                <p className="tag">@{tag}</p>
                
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li className="statsLi">
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
    
                <li className="statsLi">
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
    
                <li className="statsLi">
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.prototypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };

export default Profile
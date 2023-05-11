import { useState } from 'react'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import user from './JSON/user.json'
import data from './JSON/data.json'
import friends from './JSON/friends.json'
import FriendList from './components/FriendList'

function App() {

  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics  
        data={data}
      />

      <FriendList
        friends={friends}
      />
    </>
    
  )  
}

export default App

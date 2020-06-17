import React from 'react';
import Comment from './Comment.jsx';

const user = {
  avatarUrl: 'https://www.sololearn.com/Icons/Avatars/4604247.jpg',
  name: "Tom",
}

const App = () => {
  return (
    <Comment
      user={user}
      text="Good job!"
      date={new Date()}
    />
  )
}

export default App;
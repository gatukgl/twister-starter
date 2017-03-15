import React from 'react'

const Tweet = ({ name, username, text }) => {
  return (
    <div className='tweet'>
      <div className='name'>{name}</div>
      <div className='screen-name'>{username}</div>
      <div className='tweet-text'>{text}</div>
    </div>
  )
}

Tweet.propTypes = {
  name: React.PropTypes.string,
  userName: React.PropTypes.string,
  text: React.PropTypes.string
}

export default Tweet

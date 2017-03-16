import React from 'react'

const Tweet = ({ name, username, text }) => (
  <div className="tweet">
    <div className="name">{name}</div>
    <div className="screen-name">{username}</div>
    <div className="tweet-text">{text}</div>
  </div>
)

Tweet.propTypes = {
  name: React.PropTypes.string,
  username: React.PropTypes.string,
  text: React.PropTypes.string,
}

export default Tweet

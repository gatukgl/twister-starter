import React from 'react'
import Tweet from './Tweet'

const TweetList = ({ tweets }) => (
  <div className="tweet-list">
    {
      tweets.map(tweet => (
        <Tweet
          key={tweet.id}
          name={tweet.name}
          username={tweet.username}
          text={tweet.text}
        />
      ))
    }
  </div>
)

TweetList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

TweetList.defaultProps = {
  tweets: [
    {
      id: 1,
      name: 'Sudarat Chattanon',
      username: '@gatukgl',
      text: 'This day is awesome!!',
    },
    {
      id: 2,
      name: 'Yothin M.',
      username: '@yothinix',
      text: 'This is awesome day!!!!',
    },
  ],
}

export default TweetList

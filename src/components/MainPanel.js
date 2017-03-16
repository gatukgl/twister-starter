import React from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Sudarat Chattanon',
      username: '@gatukgl',
      tweets: [
        {
          id: 0,
          name: 'Sudarat Chattanon',
          username: '@gatukgl',
          text: 'This day is awesome!!',
        },
        {
          id: 1,
          name: 'Yothin M.',
          username: '@yothinix',
          text: 'This is awesome day!!!!',
        },
      ],
    }

    this.addToTweetList = this.addToTweetList.bind(this)
  }

  addToTweetList(tweet) {
    const tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length

    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ],
    })
  }

  render() {
    return (
      <div className="main-panel">
        <NewTweet
          name={this.state.name}
          username={this.state.username}
          addToTweetList={this.addToTweetList}
        />
        <TweetList
          tweets={this.state.tweets}
        />
      </div>
    )
  }
}

export default MainPanel

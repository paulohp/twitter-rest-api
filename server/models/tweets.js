import Twitter from '../../config/twitter'

let tweets = {}
let getLastTweets = (screen_name, count) => {
  return Twitter.get('statuses/user_timeline',{ screen_name: screen_name, count: count});
}

tweets.getLastTweets = getLastTweets

export default tweets

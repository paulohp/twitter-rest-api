import { Map } from 'Immutable'

export default Map({
  'consumerKey':  process.env.CONSUMER_KEY,
  'consumerSecret': process.env.CONSUMER_SECRET,
  'accessToken': process.env.ACCESS_TOKEN,
  'accessTokenSecret': process.env.ACCESS_TOKEN_SECRET,
  'callBackUrl': process.env.CALLBACK_URL
})
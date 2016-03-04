import resource from 'resource-router-middleware';
import tweets from '../models/tweets';

export default resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'tweet',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		var count = 50;
		if (req.query.count) {
			count = req.query.count
		}
		tweets.getLastTweets(id, count)
			.then(function(result){
				var tweet =  result.data,
						err = tweet ? null : 'Not found';

				callback(err, tweet);
			})
	},

	/** GET /:id - Return a given entity */
	read({ tweet }, res) {
  	res.json(tweet);
  },
});

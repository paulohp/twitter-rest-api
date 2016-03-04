import resource from 'resource-router-middleware';
import tweets from '../models/tweets';

export default resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'facet',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		var facet = tweets.find( facet => facet.id===id ),
			err = facet ? null : 'Not found';
		callback(err, facet);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(tweets);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = tweets.length.toString(36);
		tweets.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ params }, res) {
		res.json(req.facet);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				facet[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		tweets.splice(tweets.indexOf(facet), 1);
		res.sendStatus(204);
	}
});

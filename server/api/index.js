import { Router } from 'express';
import tweets from './tweets';

export default function() {
	var api = Router();

	// mount the tweets resource
	api.use('/tweets', tweets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}

import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';

let app = express();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit : '100kb'
}));

app.use(middleware());

// api router
app.use('/api', api());

app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);


export default app;

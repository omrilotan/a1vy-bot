import express from 'express';
import bodyParser from 'body-parser';
import ping from '@routes/ping';
import { config } from './lib/config';
import { info } from './lib/info';
import logger from './lib/logger';

import hook from './hook';

process.on('unhandledRejection', error => logger.error(error));
process.stderr.write = message => logger.error(new Error(message));

const app = express();

app.set('x-powered-by', false);
app.set('etag', false);

app.use(bodyParser.json());

app.post('/hook', hook);
app.get('/ping', ping);

app.get('/error', () => { throw new Error('Something must have gone terribly wrong'); });

const server = app.listen(
	config.port || 8080,
	async () => {
		const { port, family } = server.address();
		const { name, version } = await info();

		logger.debug(
			{
				message: `Running ${name}@${version}`,
				address: `http://localhost:${port}`,
				protocol: family,
			}
		);
	}
);

import logger from '../lib/logger';
import ping from './ping';
import issues from './issues';

const HANDLERS = {
	ping,
	issues,
};

export default async function hook(request, response, next) {
	const event = request.headers['x-github-event'];
	const handler = HANDLERS[event];

	if (typeof handler !== 'function') {
		response.sendStatus(404);
	}

	logger.info({event, payload: request.body});

	handler(request, response, next);
}

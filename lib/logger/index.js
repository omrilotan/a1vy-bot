import levelheaded from 'levelheaded';
import errobj from 'errobj';
import { config } from '../config';

const { info: log } = console;

export default levelheaded({
	minimal: config.prod ? 'info' : 'debug',
	action: function(...messages) {
		try {
			const { level } = this;

			messages.map(message => objectify(message, {level})).forEach(
				message => log(
					config.dev ? message : JSON.stringify(message)
				)
			);

		} catch (error) {
			log(...messages);
		}
	},
});

const objectify = (message, rest = {}) => typeof message === 'object'
	? message instanceof Error
		? errobj(message, ...rest)
		: {...rest, ...message}
	: {...rest, message}
;

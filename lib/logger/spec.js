import assert from 'assert';
import sinon from 'sinon';
import logger from '.';

/* eslint-disable no-console */
const { fake } = sinon;

describe('lib/logger', () => {
	const { info } = console;

	before(() => {
		console.info = fake();
	});
	afterEach(() => console.info.resetHistory());
	after(() => {
		console.info = info;
	});

	it('Should use console by default', () => {
		logger.info('Hello');
		assert(console.info.called, 'console.info was called');
	});
});
/* eslint-enable no-console */

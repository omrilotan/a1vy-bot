import { config } from '.';
import assert from 'assert';
const { strict } = assert;

describe('lib/config', () => {
	const { PORT } = process.env;
	before(() => {
		process.env.PORT = 'some value';
	});
	after(() => {
		process.env.PORT = PORT;
	});

	it('Should take port from env var PORT', async() => {
		strict.equal(config.port, 'some value');
	});
	it('Should get updated values when changed', async() => {
		process.env.PORT = 'some other value';
		strict.equal(config.port, 'some other value');
	});
});

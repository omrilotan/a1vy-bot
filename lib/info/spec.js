import { info } from '.';
import assert from 'assert';
const { strict } = assert;

describe('lib/info', () => {
	it('Should extract information from package.json', async() => {
		const { name, devDependencies } = await info();
		strict.equal(name, 'a1vy');
		strict.equal(typeof devDependencies, 'object');
	});
});

import fs from 'fs';
import path from 'path';
import scope from 'module-scope';

const { promises: { readFile } } = fs;
const { join } = path;
const { __dirname } = scope(import.meta.url);
let data;

export async function info() {
	if (data) {
		return data;
	}

	const file = await readFile(join(__dirname, '../../', 'package.json'));

	return data = JSON.parse(file.toString());
}

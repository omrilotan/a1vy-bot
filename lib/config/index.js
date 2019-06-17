import dotenv from 'dotenv';

dotenv.config(); // Load environment variables using dotenv

const config = {};

Object.defineProperties(
	config,
	{
		env: {
			get: () => process.env.NODE_ENV || 'production',
		},
		prod: {
			get: () => config.env.startsWith('prod'),
		},
		produnction: {
			get: () => config.env.startsWith('prod'),
		},
		dev: {
			get: () => config.env.startsWith('dev'),
		},
		develpment: {
			get: () => config.env.startsWith('dev'),
		},
		test: {
			get: () => config.env.startsWith('test'),
		},
		port: {
			get: () => process.env.PORT,
		},
		token: {
			get: () => process.env.SECRET_TOKEN,
		},
	}
);

export { config };

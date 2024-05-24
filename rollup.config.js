import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { ls } from '@shgysk8zer0/npm-utils/fs';

const resolve = nodeResolve();
const ignored = ['.min.js', '.config.js',  'test.js', 'schema.js'];

const modules = await ls('./', {
	filter: ({ name }) => name.endsWith('.js') && ! ignored.some(end  => name.endsWith(end)),
});

export default [{
	input: 'schema.js',
	plugins: [resolve],
	output: [{
		file: 'schema.cjs',
		format: 'cjs',
	}, {
		file: 'schema.mjs',
		format: 'module',
		plugins: [terser()],
	}],
}, ...modules.map(name => ({
	input: name,
	plugins: [resolve],
	output: {
		file: name.replace('.js', '.cjs'),
		format: 'cjs',
	},
	external: (_, parent) => parent !== undefined,
}))];

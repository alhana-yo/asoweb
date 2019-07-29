import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
	input: ['src/index.js'],
	output: {
		sourcemap: true,
		dir: 'build',
		format: 'esm'
	},
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**'
		}),
		serve({
			// Launch in browser (default: false)
			open: true,
		   
			// Page to navigate to when opening the browser.
			// Will not do anything if open=false.
			// Remember to start with a slash.
			openPage: '/',
		   
			// Show server address in console (default: true)
			verbose: true,
		   
			// Folder to serve files from
			contentBase: '',
		   
			// Set to true to return index.html (200) instead of error page (404)
			historyApiFallback: true,
		   
			// Options used in setting up server
			host: 'localhost',
			port: 10001,
		   
			//set headers
			headers: {
			  'Access-Control-Allow-Origin': '*'
			}
		  })
	]
};
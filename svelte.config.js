import path from 'path';
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';
import staticAdapter from '@sveltejs/adapter-static';
import serverAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess({
		postcss: true,
		defaults: {
			style: 'postcss'
		}
	}), mdsvex(mdsvexConfig)],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: staticAdapter(),
		vite: {
			optimizeDeps: { include: ['broadcast-channel'] },
			plugins: [imagetools({force: true})],
			resolve: {
				alias: {
					$assets: path.resolve('./src/lib/assets'),
					$lib: path.resolve('./src/lib')
				}
			}
		},
		target: '#svelte'
	}
};

export default config;

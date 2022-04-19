import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),
	kit: {
		vite: process.env.NODE_ENV === 'production'
				? {
					optimizeDeps: { include: ['broadcast-channel'] },
					ssr: {
					noExternal: ['superjson'],
					},
				}
				: {
					plugins: [imagetools({ force: true })]
				}
		},
		serviceWorker: {
			register: false
		},
		adapter: adapter()
};

export default config;

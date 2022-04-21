import { writable } from 'svelte/store';
import type { Movie } from './types';

export interface MoviesState {
	selected: Movie | null;
}

const initialState: MoviesState = {
	selected: null
};

const { subscribe, set, update } = writable<MoviesState>(initialState);

const actions = {
	reset: (): void => set(initialState),
	select: (movie: Movie) => {
		update((state) => {
			return { ...state, selected: movie };
		});
	}
};

export default { subscribe, actions };
export { actions };

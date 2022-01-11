import { writable } from 'svelte/store';
import type { Pokemon } from './types';

export interface PokemonState {
	selected: Pokemon;
}

const initialState: PokemonState = {
	selected: null
};

const { subscribe, set, update } = writable<PokemonState>(initialState);

const actions = {
	reset: (): void => set(initialState),
	select: (pokemon: Pokemon) => {
		update((state) => {
			return { ...state, selected: pokemon };
		});
	}
};

export default { subscribe, actions };
export { actions };

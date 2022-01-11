import axios from 'axios';
import type { Pokedex, Pokemon } from './types';

export const searchPokemon = async (name: string) => {
	const { data } = await axios.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon?limit=150`, {
		headers: {
			// '': '',
		}
	});

	return data;
};

export const searchPokeman = async (name: string) => {
	const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, {
		headers: {
			// '': '',
		}
	});
	return data;
};

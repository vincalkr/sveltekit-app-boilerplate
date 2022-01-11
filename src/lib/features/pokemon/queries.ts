import { useQuery } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import { searchPokemon, searchPokeman } from './api';
import type { Pokedex, Pokemon } from './types';

export enum ServerStateKeysEnum {
	Pokemon = 'Pokemon'
}

export const useGetPokemon = (name: string) =>
	useQuery<Pokedex, AxiosError<Pokedex, Pokedex>>([ServerStateKeysEnum.Pokemon, name], () =>
		searchPokemon(name)
	);

export const useGetPokeman = (name: string) =>
	useQuery<Pokemon, AxiosError<Pokemon, Pokemon>>([ServerStateKeysEnum.Pokemon, name], () =>
		searchPokeman(name)
	);

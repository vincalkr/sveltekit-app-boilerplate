import { useQuery } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import { searchMovies } from './api';
import type { Movie } from './types';

export enum ServerStateKeysEnum {
  Movies = 'movies'
} 

export const useGetMovies = (name: string) =>
	useQuery<Movie[], AxiosError<Movie, Movie>>([ServerStateKeysEnum.Movies, name], () =>
	searchMovies(name)
	);

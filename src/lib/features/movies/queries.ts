import { useQuery } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axios from 'axios';
import type { Movie } from './types';

export enum ServerStateKeysEnum {
  Movies = 'movies'
} 

export const useGetMovies = (name: string) =>
	useQuery<Movie[], AxiosError<Movie, Movie>>([ServerStateKeysEnum.Movies, name], () =>
	axios.get(`https://api.tvmaze.com/search/shows?q=${name}`).then(res => res.data)
	);

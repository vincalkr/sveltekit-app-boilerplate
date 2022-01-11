import axios from 'axios';
import type { Movie } from './types';

export const searchMovies = async (name: string) => {
	const { data } = await axios.get<Movie[]>(`https://api.tvmaze.com/search/shows?q=${name}`, {
		headers: {
			// '': '',
		}
	});

	return data;
};

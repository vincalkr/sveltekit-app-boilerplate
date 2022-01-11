import axios from 'axios';
import type { Order } from './types';

export const searchOrder = async (name: string) => {
	const { data } = await axios.get<Order>(`https://fakestoreapi.com/products?limit=3`, {
		headers: {
			// '': '',
		}
	});

	return data;
};

import { useQuery } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import { searchOrder } from './api';
import type { Order } from './types';

export enum ServerStateKeysEnum {
	Order = 'Order'
}

export const useGetOrder = (name: string) =>
	useQuery<Order, AxiosError<Order, Order>>([ServerStateKeysEnum.Order, name], () =>
		searchOrder(name)
	);

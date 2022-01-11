import { writable } from 'svelte/store';
import type { Order } from './types';

export interface OrderState {
	selected: Order;
}

const initialState: OrderState = {
	selected: null
};

const { subscribe, set, update } = writable<OrderState>(initialState);

const actions = {
	reset: (): void => set(initialState),
	select: (order: Order) => {
		update((state) => {
			return { ...state, selected: order };
		});
	}
};

export default { subscribe, actions };
export { actions };

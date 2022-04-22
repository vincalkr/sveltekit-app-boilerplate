import type { UserInfo } from '$lib/server/trpc';
import { read, write } from '$lib/utils/storage';
import { writable } from 'svelte/store';

export interface AuthState {
	user: UserInfo | null;
}

const initialState: AuthState = {
	user: read('auth'),
};

const { subscribe, set, update } = writable<AuthState>(initialState);

const actions = {
	setUser: (user: UserInfo) => {
		update((state) => {
			return { ...state, user };
		});
	}
};

subscribe((value) => write('auth', value));

export default { subscribe, actions };
export { actions };

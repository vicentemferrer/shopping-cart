import { getFromLocalStorage, saveToLocalStorage } from '../utils/storage.js';

export const cartInitialState = getFromLocalStorage('cart') || [];

export const CART_ACTIONS = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART'
};

const ACTION_HANDLERS = {
	[CART_ACTIONS.ADD_TO_CART]: (state, { payload }) => {
		const { id } = payload;

		const cartProductIndex = state.findIndex((item) => item.id === id);

		if (cartProductIndex >= 0) {
			const newCart = structuredClone(state);
			newCart[cartProductIndex].quantity += 1;

			return newCart;
		}

		return [...state, { ...payload, quantity: 1 }];
	},

	[CART_ACTIONS.REMOVE_FROM_CART]: (state, { payload }) => {
		const { id } = payload;

		return state.filter((item) => item.id !== id);
	},

	[CART_ACTIONS.CLEAR_CART]: () => []
};

export function cartReducer(state, action) {
	const { type } = action;

	const actionHandler = ACTION_HANDLERS[type];

	const newState = actionHandler ? actionHandler(state, action) : state;

	saveToLocalStorage('cart', newState);

	return newState;
}

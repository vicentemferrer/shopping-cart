import { useReducer } from 'react';
import { cartInitialState, CART_ACTIONS, cartReducer } from '../reducers/cart';

export function useCartReducer() {
	const [cart, dispatch] = useReducer(cartReducer, cartInitialState);

	const addToCart = (product) => dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product });

	const removeFromCart = ({ id }) =>
		dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id } });

	const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART });

	return { cart, addToCart, removeFromCart, clearCart };
}

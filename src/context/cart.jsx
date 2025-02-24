import { CartContext } from './contexts.js';
import { useCartReducer } from '../hooks/useCartReducer.js';

export default function CartProvider({ children }) {
	const { cart, addToCart, removeFromCart, clearCart } = useCartReducer();

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
}

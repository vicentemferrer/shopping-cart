import { useState } from 'react';
import { CartContext } from './contexts.js';

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const cartProductIndex = cart.findIndex((item) => item.id === product.id);

		if (cartProductIndex >= 0) {
			const newCart = structuredClone(cart);
			newCart[cartProductIndex].quantity += 1;

			return setCart(newCart);
		}

		setCart((prevState) => {
			return [...prevState, { ...product, quantity: 1 }];
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	const removeFromCart = (product) => {
		setCart((prevState) => prevState.filter((item) => item.id !== product.id));
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
}

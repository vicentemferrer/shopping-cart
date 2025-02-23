import { useId } from 'react';
import { useCart } from '../hooks/useCart.js';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import './Cart.css';

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>

			<footer>
				<small>Qty: {quantity}</small>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	);
}

export function Cart() {
	const { cart, clearCart, addToCart } = useCart();
	const cartCheckboxId = useId();

	return (
		<>
			<label className='cart-button'>
				<CartIcon />
				<input id={cartCheckboxId} type='checkbox' hidden />
			</label>

			<aside className='cart'>
				<ul>
					{cart.map((product) => (
						<CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}

import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import './Products.css';

export default function Products({ products }) {
	const { cart, addToCart, removeFromCart } = useCart();

	const checkProductInCart = (product) => cart.some((item) => item.id === product.id);

	return (
		<main className='products'>
			<ul>
				{products.map((product) => {
					const isInCart = checkProductInCart(product);

					return (
						<li key={product.id}>
							<img src={product.thumbnail} alt={product.title} loading='lazy' />
							<div>
								<strong>{product.title}</strong> - ${product.price}
							</div>
							<div>
								{isInCart ? (
									<button
										style={{ backgroundColor: 'red' }}
										onClick={() => removeFromCart(product)}>
										<RemoveFromCartIcon />
									</button>
								) : (
									<button
										style={{ backgroundColor: 'darkcyan' }}
										onClick={() => addToCart(product)}>
										<AddToCartIcon />
									</button>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}

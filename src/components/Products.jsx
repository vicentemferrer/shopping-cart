import './Products.css';

import { AddToCartIcon } from './Icons.jsx';

export default function Products({ products }) {
	return (
		<main className='products'>
			<ul>
				{products.map(({ id, thumbnail, title, price }) => (
					<li key={id}>
						<img src={thumbnail} alt={title} loading='lazy' />
						<div>
							<strong>{title}</strong> - ${price}
						</div>
						<div>
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}

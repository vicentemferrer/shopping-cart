import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';
import categories from '../mocks/categories.json';
import './Filters.css';

export function Filters() {
	const {
		filters: { minPrice },
		setFilters
	} = useFilters();
	const priceId = useId();
	const categoryId = useId();

	const handleChangeMinPrice = (event) => {
		setFilters((prevState) => ({
			...prevState,
			minPrice: Number(event.target.value)
		}));
	};

	const handleChangeCategory = (event) => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value
		}));
	};

	return (
		<section className='filters'>
			<label>
				Price:
				<input
					type='range'
					id={priceId}
					value={minPrice}
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</label>
			<label>
				Category:
				<select id={categoryId} onChange={handleChangeCategory}>
					{categories.map(({ name, slug }) => (
						<option key={slug} value={slug}>
							{name}
						</option>
					))}
				</select>
			</label>
		</section>
	);
}

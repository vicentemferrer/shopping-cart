import { useState } from 'react';
import { FiltersContext } from './contexts.js';

export default function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
	);
}

import { useFilters } from './hooks/useFilters.js';
import CartProvider from './context/cart.jsx';
import Header from './components/Header.jsx';
import { Cart } from './components/Cart.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';
import { products as initialProducts } from './mocks/products.json';

function App() {
	const { filterProducts } = useFilters();

	const filteredProducts = filterProducts(initialProducts);

	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={filteredProducts} />
			<Footer />
		</CartProvider>
	);
}

export default App;

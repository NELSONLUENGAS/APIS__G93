import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [gatitos, setGatitos] = useState([]);
	const [pizzas, setPizzas] = useState([]);
	const [fetching, setFetching] = useState(false);

	// const handleFetch = async (url) => {
	// 	setFetching(true);
	// 	const response = await fetch(url);

	// 	const data = await response.json();
	// 	setFetching(false);
	// 	setGatitos(data);
	// };

	const handleFetch = (url) => {
		setFetching(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => setPizzas(data))
			.finally(() => setFetching(false));
	};

	useEffect(() => {
		// handleFetch('https://api.thecatapi.com/v1/images/search?limit=10');
		handleFetch('http://localhost:5000/api/pizzas');
	}, []);

	return (
		<div>
			<h1>APIS</h1>
			{fetching ? (
				<h1>Buscando Gatitos</h1>
			) : (
				pizzas.map((pizz) => (
					<div key={pizz.id}>
						<h1>{`Gatito #${pizz.id}`}</h1>
						<h2>{pizz.name}</h2>
						<img
							src={pizz.img}
							alt="Imagen de Gatito"
							style={{ maxWidth: '500px', objectFit: 'cover' }}
						/>
					</div>
				))
			)}
		</div>
	);
}

export default App;

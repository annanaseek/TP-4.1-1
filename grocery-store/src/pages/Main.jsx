import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import FirstBlock from '../components/firstPage/firstBlock/FirstBlock';
import AboutUs from '../components/firstPage/aboutUs/AboutUs';
import React from 'react';
import Catalog from '../components/firstPage/catalog/Catalog';

function App() {
	return (
		<>
			<Header />
			<FirstBlock />
			<AboutUs />
			<Catalog />
			<Footer />
		</>
	);
}

export default App;

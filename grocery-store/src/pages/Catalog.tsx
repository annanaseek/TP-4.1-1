import React from "react";
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import { Col, Container } from "../components/ui/grid";
import Search from "../components/ui/search/Search";
import CatalogItem from "../components/firstPage/catalog/catalogItem/CatalogItem";
import './Catalog.scss'

const Catalog = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="catalog_search">
					<Search />
				</div>
				<div className="row items catalog_catalog">
					<Col columns={4}>
						<CatalogItem
							text="Молоко,<br /> сыр, яйца"
							img="catalog-1.png"
							color="#CBF3FF"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Хлеб и<br />выпечка"
							img="catalog-2.png"
							color="#FFF0CB"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Мясо, птица<br />деликатесы"
							img="catalog-3.png"
							color="#FFE4CB"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Рыба и<br />морепродукты"
							img="catalog-4.png"
							color="#CBE3FF"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Соки, воды,<br />напитки"
							img="catalog-5.png"
							color="#D5FFCB"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Сладости и<br />снеки"
							img="catalog-6.png"
							color="#FCE8FF"
						/>
					</Col>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Catalog;
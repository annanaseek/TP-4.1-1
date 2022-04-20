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
					<Col columns={3} className="margin">
						<a href="#">
							<CatalogItem
								text="Молоко,<br /> сыр, яйца"
								img="catalog-1.png"
								color="#CBF3FF"
							/>
						</a>
					</Col>
					<Col columns={3} className="margin">
						<a href="#">
							<CatalogItem
								text="Хлеб и<br />выпечка"
								img="catalog-2.png"
								color="#FFF0CB"
							/>
						</a>
					</Col>
					<Col columns={3}>
						<a href="#">
							<CatalogItem
								text="Мясо, птица<br />деликатесы"
								img="catalog-3.png"
								color="#FFE4CB"
							/>
						</a>
					</Col>
					<Col columns={3} className="margin">
						<a href="#">
							<CatalogItem
								text="Рыба и<br />морепродукты"
								img="catalog-4.png"
								color="#CBE3FF"
							/>
						</a>
					</Col>
					<Col columns={3} className="margin">
						<a href="#">
							<CatalogItem
								text="Соки, воды,<br />напитки"
								img="catalog-5.png"
								color="#D5FFCB"
							/>
						</a>
					</Col>
					<Col columns={3}>
						<a href="#">
							<CatalogItem
								text="Сладости и<br />снеки"
								img="catalog-6.png"
								color="#FCE8FF"
							/>
						</a>
					</Col>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Catalog;
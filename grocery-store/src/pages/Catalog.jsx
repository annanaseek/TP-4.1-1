import React, { useEffect, useState } from "react";
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import { Col, Container } from "../components/ui/grid";
import Search from "../components/ui/search/Search";
import CatalogItem from "../components/firstPage/catalog/catalogItem/CatalogItem";
import './Catalog.scss'

function Catalog() {

	const [appState, setAppState] = useState([{ name: "", imageUrl: "", id: "" }]);
	const apiUrl = process.env.BACKEND_CATALOG
	console.log(process.env.BACKEND_CATALOG)

	useEffect(() => {

		fetch("http://localhost:3000/api/category/root",
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setAppState(result);
				},
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
			)
	}, []);

	return (
		<>
			<Header />
			<Container>
				<div className="catalog_search">
					<Search />
				</div>
				<div className="row items catalog_catalog">
					{appState.map((item, key) => (
						<Col columns={4} key={key}>
							<CatalogItem
								text={item.name}
								img={item.imageUrl}
								href={`/catalog/${item.id}`}
								color="#CBF3FF"
							/>
						</Col>
					))}
					{/* <Col columns={4}>
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
					</Col> */}
				</div>
			</Container>
			<Footer />
		</>
	);
}



export default Catalog;
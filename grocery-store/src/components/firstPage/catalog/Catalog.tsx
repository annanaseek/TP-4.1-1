import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../ui/grid";
import Title from "../../ui/title/Title";
import CatalogItem from "./catalogItem/CatalogItem";
import { Col } from "../../ui/grid";

import './Catalog.scss'

const Catalog = () => {

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
		<section className="catalog_section">
			<Container>
				<div className="catalogTitle">
					<Title>
						Каталог
					</Title>
				</div>

				<div className="row items">
					{appState.map((item, key) => (
						(key < 6) ?
							<Col columns={4} key={key}>
								<CatalogItem
									text={item.name}
									img={item.imageUrl}
									href={`/catalog/${item.id}`}
									color="#CBF3FF"
								/>
							</Col>
							: null
					))}
					{/* <Col columns={4}>
						<CatalogItem
							text="Молоко,<br /> сыр, яйца"
							img="catalog-1.png"
							href="/product-catalog/slug"
							color="#CBF3FF"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Хлеб и<br />выпечка"
							img="catalog-2.png"
							href="/product-catalog/slug"
							color="#FFF0CB"
						/>
					</Col>
					<Col columns={4}>

						<CatalogItem
							text="Мясо, птица<br />деликатесы"
							img="catalog-3.png"
							href="/product-catalog/slug"
							color="#FFE4CB"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Рыба и<br />морепродукты"
							img="catalog-4.png"
							href="/product-catalog/slug"
							color="#CBE3FF"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Соки, воды,<br />напитки"
							img="catalog-5.png"
							href="/product-catalog/slug"
							color="#D5FFCB"
						/>
					</Col>
					<Col columns={4}>
						<CatalogItem
							text="Сладости и<br />снеки"
							img="catalog-6.png"
							href="/product-catalog/slug"
							color="#FCE8FF"
						/>
					</Col> */}
				</div>

				<div className="catalog_showMore">
					<Link to="/catalog" className="catalog_showMore_link">
						Показать больше
					</Link>
				</div>
			</Container>
		</section>
	);
}

export default Catalog;


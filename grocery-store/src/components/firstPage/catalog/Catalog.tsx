import React from "react";
import { Link } from "react-router-dom"; 
import { Container } from "../../ui/grid";
import Title from "../../ui/title/Title";
import CatalogItem from "./catalogItem/CatalogItem";
import { Col } from "../../ui/grid";

import './Catalog.scss'

const Catalog = () => {
	return (
		<section className="catalog_section">
			<Container>
				<div className="catalogTitle">
					<Title>
						Каталог
					</Title>
				</div>

				<div className="row items">
					<Col columns={3} className="margin">
						<CatalogItem
							text="Молоко,<br /> сыр, яйца"
							img="catalog-1.png"
							color="#CBF3FF"
						/>
					</Col>
					<Col columns={3} className="margin">
						<CatalogItem
							text="Хлеб и<br />выпечка"
							img="catalog-2.png"
							color="#FFF0CB"
						/>
					</Col>
					<Col columns={3}>

						<CatalogItem
							text="Мясо, птица<br />деликатесы"
							img="catalog-3.png"
							color="#FFE4CB"
						/>
					</Col>
					<Col columns={3} className="margin">
						<CatalogItem
							text="Рыба и<br />морепродукты"
							img="catalog-4.png"
							color="#CBE3FF"
						/>
					</Col>
					<Col columns={3} className="margin">
						<CatalogItem
							text="Соки, воды,<br />напитки"
							img="catalog-5.png"
							color="#D5FFCB"
						/>
					</Col>
					<Col columns={3}>
						<CatalogItem
							text="Сладости и<br />снеки"
							img="catalog-6.png"
							color="#FCE8FF"
						/>
					</Col>
				</div>

				<div className="catalog_showMore">
					<Link to="/catalog">
						Показать больше
					</Link>
				</div>
			</Container>
		</section>
	);
}

export default Catalog;


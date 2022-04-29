import React from "react";
import Header from '../../../components/layout/header/Header'
import Footer from "../../../components/layout/footer/Footer";
import { Container, Col } from "../../../components/ui/grid";
import Search from "../../../components/ui/search/Search";
import CatalogItem from "../../../components/firstPage/catalog/catalogItem/CatalogItem";
import './Products.scss'
const ProductsAdmin = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className="pa_menu_items">
						<div className="pa_menu_item">
							История заказов
						</div>
						<div className="pa_menu_item_active">
							Товары
						</div>
						<div className="pa_menu_item">
							Пользователи
						</div>
					</div>
					<div>
						<div className="row">
							<div className="catalog_search_admin">
								<Search />
							</div>
							<div className="catalog_add_categoty">
								Добавить категория
							</div>
						</div>

						<div className="row items catalog_catalog">
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Молоко,<br /> сыр, яйца"
										img="catalog-1.png"
										color="#CBF3FF"
									/>
								</a>
							</Col>
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Хлеб и<br />выпечка"
										img="catalog-2.png"
										color="#FFF0CB"
									/>
								</a>
							</Col>
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Мясо, птица<br />деликатесы"
										img="catalog-3.png"
										color="#FFE4CB"
									/>
								</a>
							</Col>
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Рыба и<br />морепродукты"
										img="catalog-4.png"
										color="#CBE3FF"
									/>
								</a>
							</Col>
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Соки, воды,<br />напитки"
										img="catalog-5.png"
										color="#D5FFCB"
									/>
								</a>
							</Col>
							<Col columns={4} className="admin_margin">
								<a href="#">
									<CatalogItem
										text="Сладости и<br />снеки"
										img="catalog-6.png"
										color="#FCE8FF"
									/>
								</a>
							</Col>
						</div>
					</div>
				</div>

			</Container>
			<Footer />
		</>
	);
}

export default ProductsAdmin;
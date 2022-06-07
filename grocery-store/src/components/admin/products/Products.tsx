import React from "react";
import { Col } from "../../ui/grid";
import Search from "../../ui/search/Search";
import CatalogItem from "../../firstPage/catalog/catalogItem/CatalogItem";
import styles from './Products.module.scss'


const ProductsAdmin = () => {
	return (
		<>
			<div className="row">
				<div className={styles.catalog_search_admin}>
					<Search />
				</div>
				<div className={styles.catalog_add_categoty}>
					Добавить категория
				</div>
			</div>

			<div className="row items catalog_catalog">
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Молоко,<br /> сыр, яйца"
							img="catalog-1.png"
							href="/product-catalog/slug"
							color="#CBF3FF"
						/>
					</a>
				</Col>
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Хлеб и<br />выпечка"
							img="catalog-2.png"
							href="/product-catalog/slug"
							color="#FFF0CB"
						/>
					</a>
				</Col>
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Мясо, птица<br />деликатесы"
							img="catalog-3.png"
							href="/product-catalog/slug"
							color="#FFE4CB"
						/>
					</a>
				</Col>
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Рыба и<br />морепродукты"
							img="catalog-4.png"
							href="/product-catalog/slug"
							color="#CBE3FF"
						/>
					</a>
				</Col>
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Соки, воды,<br />напитки"
							img="catalog-5.png"
							href="/product-catalog/slug"
							color="#D5FFCB"
						/>
					</a>
				</Col>
				<Col columns={4} className={styles.admin_margin}>
					<a href="#">
						<CatalogItem
							text="Сладости и<br />снеки"
							img="catalog-6.png"
							href="/product-catalog/slug"
							color="#FCE8FF"
						/>
					</a>
				</Col>
			</div>
		</>
	);
}

export default ProductsAdmin;
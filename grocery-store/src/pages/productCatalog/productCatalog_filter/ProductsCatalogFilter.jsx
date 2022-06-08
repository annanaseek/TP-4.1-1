import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Footer from "../../../components/layout/footer/Footer";
import Header from "../../../components/layout/header/Header";
import Search from "../../../components/ui/search/Search";
import Filters from '../../../components/filters/Filters';
import { Col, Container } from "../../../components/ui/grid";
import ProductItem from "../../../components/products/ProductItem";
import Pagination from "../../../components/ui/pagination/Pagination";
import styles from "./slug.module.scss"

const ProductsCatalogFilter = () => {

	const [productsState, setProductsState] = useState([]);
	const [categoryState, setCategoryState] = useState([]);

	const apiUrl = process.env.BACKEND_CATALOG

	const { id } = useParams();

	console.log(id)


	useEffect(() => {

		fetch(`http://localhost:3000/api/product/${id}`,
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setProductsState(JSON.parse(JSON.stringify(result)));
				},

			)
	}, []);

	useEffect(() => {

		fetch(`http://localhost:3000/api/category/${id}`,
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setCategoryState(JSON.parse(JSON.stringify(result)));
				},
			)
	}, []);


	console.log(productsState)

	return (
		<>
			<Header />
			<Container>
				<div className={styles.row_container}>
					<div className={styles.slug_filters}>
						<Filters data={categoryState} items={categoryState.items} />
					</div>
					<div className={styles.slug_catalog}>
						<div className={styles.slug_search}>
							<Search />
						</div>
						<div className={`row ${styles.slug_items}`}>
							{(productsState.length == 0) ?
								"Еще нет продуктов этой категории"
								:
								productsState.map((item, key) => (
									<div className={styles.slug_margin} key={key}>
										<ProductItem
											img={item.imageUrl}
											text={item.name}
											salePrice={0}
											price={item.price} />
									</div>
								))
							}

						</div>
						{/* <div className={styles.slug_pagination}>
							<Pagination />
						</div> */}
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default ProductsCatalogFilter;
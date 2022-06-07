import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Search from "../../components/ui/search/Search";
import Filters from '../../components/filters/Filters';
import { Col, Container } from "../../components/ui/grid";
import ProductItem from "../../components/products/ProductItem";
import Pagination from "../../components/ui/pagination/Pagination";
import styles from "./slug.module.scss"

const Products_catalog = () => {

	const [productsState, setProductsState] = useState([]);

	const apiUrl = process.env.BACKEND_CATALOG
	console.log(process.env.BACKEND_CATALOG)

	const postSlug = useParams();
	let filtredfilterData

	useEffect(() => {

	}, [postSlug]);


	useEffect(() => {

		fetch(`http://localhost:3000/api/product/${postSlug.productsSlug}`,
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setProductsState(result);
					console.log(result)
				},
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
			)
	}, [setProductsState]);

	console.log(productsState)



	return (
		<>
			<Header />
			<Container>
				<div className="row">
					<div className={styles.slug_filters}>
						<Filters data={filtredfilterData} />
					</div>
					<div className={styles.slug_catalog}>
						<div className={styles.slug_search}>
							<Search />
						</div>
						<div className={`row ${styles.slug_items}`}>
							{productsState[0].map((key, item) => (
								<div className={styles.slug_margin} key={key}>
									<ProductItem
										img={item.imageUrl}
										text={item.name}
										salePrice={0}
										price={item.price} />
								</div>
							))}
						</div>
						<div className={styles.slug_pagination}>
							<Pagination />
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Products_catalog;
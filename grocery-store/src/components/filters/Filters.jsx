import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Filters.scss'

const Filters = () => {
	const [filterState, setFilterState] = useState([{ name: "", imageUrl: "", id: 0 }]);

	useEffect(() => {

		fetch("http://localhost:3000/api/category/root/all",
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setFilterState(result);
				},
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
			)
	}, [setFilterState]);

	const postSlug = useParams();
	let filtredfilterData

	useEffect(() => {

		filtredfilterData = filterState.filter((catalog) => catalog.id == postSlug.productsSlug)

		console.log(postSlug.productsSlug)

	}, [postSlug]);

	return (
		<div className="filters">
			<div className="filters_title">
				<a href="#" >
					Каталог товаров
				</a>
			</div>
			<hr className="filters_line" />
			<div className="filters_slug_title">
				Молоко, сыр, яйца
			</div>
			<div className="filters_slug_items">
				<div className="filters_slug_item">
					<a href="#">
						Молоко
					</a>
				</div>
				<div className="filters_slug_item">
					<a href="#">
						Сыр
					</a>
				</div>
				<div className="filters_slug_item">
					<a href="#">
						Творог, cырки
					</a>
				</div>
			</div>
		</div>
	);
}

export default Filters;
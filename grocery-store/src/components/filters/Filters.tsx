import React from "react";
import './Filters.scss'
const Filters = () => {
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
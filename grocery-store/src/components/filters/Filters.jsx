import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Filters.scss'
import { Link } from "react-router-dom";

/* interface Props {
	data: {
		name: string,
		items: [{
			name: string,
			parentId: 0,
		}]
	}
} */

const Filters = (props) => {
	console.log(props.data)

	return (
		<div className="filters">
			<div className="filters_title">
				<a href="/catalog" >
					Каталог товаров
				</a>
			</div>
			<hr className="filters_line" />
			<div className="filters_slug_title">
				{props.data.name}
			</div>
			<div className="filters_slug_items">
				{props.items?.map((item, key) => (
					<div className="filters_slug_item" key={key}>
						<Link to={`/catalog/${props.data.id}/${item.id}`}>
							{item.name}
						</Link>
					</div>
				))}

			</div>
		</div>
	);
}

export default Filters;
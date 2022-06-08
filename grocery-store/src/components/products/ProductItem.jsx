import React, { useEffect, useState } from "react";
import './ProductItem.scss'

/* class ProductItem extends React.Component {
 */	const ProductItem = (props) => {

	/* constructor(props) {
		super(props);
		this.state = {

		}
	} */

	const id = props.productID

	function toBasket() {
		console.log(id)
		fetch(`http://localhost:3000/api/basket/${id}/1`,
			{
				mode: "cors",
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
					'Accept-Encoding': 'gzip, deflate, br',
					'Connection': 'keep-alive'
				},
				body: JSON.stringify({
					productId: id,
					count: 1
				})
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					console.log(JSON.parse(JSON.stringify(result)));
				},
			)
	}


	return (
		<div className="product_item">
			<div className="product_item_img">
				<img src={`/${props.img}`} alt="" />
			</div>
			<a href="/product-catalog/product/slug">
				<div className="product_item__title" dangerouslySetInnerHTML={{ __html: props.text }} />
			</a>
			<div className="row product_item__text">
				<div className="row product_item_prices">
					<div className={`${(props.salePrice === 0) ? "product_item__price_big" : "product_item__price"}`}>
						{props.price} ₽
					</div>
				</div>

				<button onClick={toBasket()} className="product_item__basket">
					<img src="/basket.svg" alt="" />
				</button>
			</div>
		</div>
	);

}

export default ProductItem;
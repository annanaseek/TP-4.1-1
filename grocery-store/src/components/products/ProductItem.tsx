import React from "react";
import './ProductItem.scss'

interface Props {
	img: string,
	text: string,
	salePrice: number,
	price: number
}

const ProductItem = ({ img, text, salePrice, price }: Props) => {
	return (
		<a href="/product-catalog/product/slug">
			<div className="product_item">
				<div className="product_item_img">
					<img src={`/${img}`} alt="" />
				</div>
				<div className="product_item__title" dangerouslySetInnerHTML={{ __html: text }} />
				<div className="row product_item__text">
					<div className="row product_item_prices">
						{/* 					<div className="product_item__sale_price">
						{salePrice} ₽
					</div> */}
						<div className={`${(salePrice === 0) ? "product_item__price_big" : "product_item__price"}`}>
							{price} ₽
						</div>
					</div>

					<div className="product_item__basket">
						<img src="/basket.svg" alt="" />
					</div>
				</div>
			</div>
		</a>
	);
}

export default ProductItem;
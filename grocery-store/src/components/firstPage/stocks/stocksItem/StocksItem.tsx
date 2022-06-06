import React from "react";
import './StocksItem.scss'

interface Props {
	img: string,
	text: string,
	salePrice: number,
	price: number
}

const StocksItem = ({ img, text, salePrice, price }: Props) => {
	return (
		<div className="stocks_item">
			<a href="/product-catalog/product/slug">
				<div className="stocks_item_img">
					<img src={`./${img}`} alt="" />
				</div>
				<div className="stocks_item__title" dangerouslySetInnerHTML={{ __html: text }} />
				<div className="row stocks_item__text">
					<div className="row stocks_item_prices">
						<div className="stocks_item__sale_price">
							{salePrice} ₽
						</div>
						<div className="stocks_item__price">
							{price} ₽
						</div>
					</div>

					<div className="stocks_item__basket">
						<img src="./basket.svg" alt="" />
					</div>
				</div>
			</a>
		</div>
	);
}

export default StocksItem;
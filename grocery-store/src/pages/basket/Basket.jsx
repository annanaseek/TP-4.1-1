import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import './Basket.scss'
import BasketProductItem from "../../components/basket_products/BasketProductItem";
import React, { useEffect, useState } from "react";

const Basket = () => {
	const [productsState, setProductsState] = useState([]);

	useEffect(() => {

		fetch(`http://localhost:3000/api/basket`,
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


	console.log(productsState)

	return (
		<>
			<Header />
			<Container>

				<div className="row basket">
					{(productsState.length == 0 || productsState.products.length == 0) ?
						"Корзина пуста. Добавьте товары"
						:
						<><div className="basket_items_width">
							<div className="basket_items">

								<BasketProductItem
									img={productsState?.products[0].product.imageUrl}
									price={productsState?.products[0].product.price}
									title={productsState?.products[0].product.name}
									id={productsState?.products[0].product.id} />

							</div>

						</div><div className="basket_info">
								<div className=" row basket_info__amount_cost">
									<div className="basket_info__amount_cost_title">
										К оплате
									</div>
									<div className="basket_info__amount_cost_cost">
										{productsState.price} ₽
									</div>
								</div>
								<div className="basket_info__order_btn">
									<a href="/order" className="basket-order-link">
										Оформить заказ
									</a>
								</div>
								<div className="basket_info__interval_delivery_btn">
									<a href="/order/interval-delivery" className="basket-order_interval-link">
										Оформить заказ
									</a>
								</div>
							</div></>
					}

				</div>

			</Container>
			<Footer />
		</>
	);
}

export default Basket;
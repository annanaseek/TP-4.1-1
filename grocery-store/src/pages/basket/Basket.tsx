import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import './Basket.scss'

const Basket = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row basket">
					<div className="basket_items_width">
						<div className="basket_items">
							<div className="row basket_item">
								<div className="basket_img">
									<img src="/product3.png" alt="" />
								</div>
								<div className="basket_title">
									Молоко «Вкуснотеево» 3,2 ультрапастеризованное, 925 мл
								</div>
								<div className="row basket_amount">
									<span className="basket_btn_amount_minus">
										-
									</span>
									<span className="basket_amount_text">
										1 шт
									</span>
									<span className="basket_btn_amount_plus">
										+
									</span>
								</div>
								<div className="basket_price">
									45 ₽
								</div>
							</div>
							<div className=" row basket_item">
								<div className="basket_img">
									<img src="/product3.png" alt="" />
								</div>
								<div className="basket_title">
									Молоко «Вкуснотеево» 3,2 ультрапастеризованное, 925 мл
								</div>
								<div className="basket_amount">
									<span className="basket_btn_amount_minus">
										-
									</span>
									<span className="basket_amount_text">
										1 шт
									</span>
									<span className="basket_btn_amount_plus">
										+
									</span>
								</div>
								<div className="basket_price">
									45 ₽
								</div>
							</div>
						</div>
						<div className="basket_clean_btn">
							Очистить
						</div>
					</div>
					<div className="basket_info">
						<div className="row basket_info__cost_product">
							<div className="basket_info__cost_product_title">
								1 товар
							</div>
							<div className="basket_info__cost_product_cost">
								45,00 ₽
							</div>
						</div>
						<div className="row basket_info__delivery">
							<div className="basket_info__delivery_title">
								Доставка
							</div>
							<div className="basket_info__delivery_cost">
								99,00 ₽
							</div>
						</div>
						<div className=" row basket_info__amount_cost">
							<div className="basket_info__amount_cost_title">
								К оплате
							</div>
							<div className="basket_info__amount_cost_cost">
								144 ₽
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
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Basket;
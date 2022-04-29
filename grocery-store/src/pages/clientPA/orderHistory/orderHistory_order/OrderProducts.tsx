import React from "react";
import Header from '../../../../components/layout/header/Header'
import Footer from "../../../../components/layout/footer/Footer";
import { Container } from "../../../../components/ui/grid";

const OrderProductHistory = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className="pa_menu_items">
						<div className="pa_menu_item">
							Аккаунт
						</div>
						<div className="pa_menu_item">
							Заказы
						</div>
						<div className="pa_menu_item_active">
							История заказов
						</div>
					</div>
					<div>
						<div className="pa_order_return">
							Вернуться к заказам
						</div>
						<div className="pa_order_title">
							Товары заказа
						</div>
						<div className="pa_order">
							<div className="row basket_item">
								<div className="basket_img">
									<img src="/product3.png" alt="" />
								</div>
								<div className="basket_title">
									Молоко «Вкуснотеево» 3,2 ультрапастеризованное, 925 мл
								</div>
								<div className=" basket_amount_text">
									1 шт
								</div>
								<div className="basket_price">
									45 ₽
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default OrderProductHistory;
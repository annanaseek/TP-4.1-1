import React from "react";
import Header from '../../../components/layout/header/Header'
import Footer from "../../../components/layout/footer/Footer";
import './Orders.scss'
import { Container } from "../../../components/ui/grid";

const Orders = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className="pa_menu_items">
						<div className="pa_menu_item">
							Аккаунт
						</div>
						<div className="pa_menu_item_active">
							Заказы
						</div>
						<div className="pa_menu_item">
							История заказов
						</div>
					</div>
					<div>
						<div className="pa_orders">
							<table>
								<tr>
									<th className="pa_orders_th_1">Товары</th>
									<th className="pa_orders_th_2">Адрес</th>
									<th className="pa_orders_th_3">Статус</th>
									<th className="pa_orders_th_4">Сумма</th>
								</tr>
								<tr>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_status">Подтвердить получение</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_status">Подтвердить получение</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_status">Подтвердить получение</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_status">Подтвердить получение</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_status">Подтвердить получение</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Orders;
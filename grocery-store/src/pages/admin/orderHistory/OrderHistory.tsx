import React from "react";
import Header from '../../../components/layout/header/Header'
import Footer from "../../../components/layout/footer/Footer";
import { Container } from "../../../components/ui/grid";

const OrderHistory = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className="pa_menu_items">
						<div className="pa_menu_item_active">
							История заказов
						</div>
						<div className="pa_menu_item">
							Товары
						</div>
						<div className="pa_menu_item">
							Пользователи
						</div>
					</div>
					<div>
						<div className="pa_orders">
							<table>
								<tr>
									<th className="pa_orders_th_1">Номер</th>
									<th className="pa_orders_th_2">Товары</th>
									<th className="pa_orders_th_2">Адрес</th>
									<th className="pa_orders_th_2">Телефон</th>
									<th className="pa_orders_th_3">Курьер</th>
									<th className="pa_orders_th_3">Дата</th>
									<th className="pa_orders_th_4">Сумма</th>
								</tr>
								<tr>
									<td className="pa_orders_address">565456</td>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_address">8 952 954 35 77</td>
									<td className="pa_orders_address">Иванов Иван Иванович</td>
									<td className="pa_orders_address">16.02.2022</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_address">565456</td>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_address">8 952 954 35 77</td>
									<td className="pa_orders_address">Иванов Иван Иванович</td>
									<td className="pa_orders_address">16.02.2022</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_address">565456</td>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_address">8 952 954 35 77</td>
									<td className="pa_orders_address">Иванов Иван Иванович</td>
									<td className="pa_orders_address">16.02.2022</td>
									<td className="pa_orders_amount">168,90 ₽</td>
								</tr>
								<tr>
									<td className="pa_orders_address">565456</td>
									<td className="pa_orders_products">Просмотреть товары</td>
									<td className="pa_orders_address">г. Воронеж, Олимпийский бульвар 56, 888</td>
									<td className="pa_orders_address">8 952 954 35 77</td>
									<td className="pa_orders_address">Иванов Иван Иванович</td>
									<td className="pa_orders_address">16.02.2022</td>
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

export default OrderHistory;
import React, { useEffect, useState } from "react";
import styles from './Orders.module.scss'

const Orders = () => {

	const [ordersState, setOrdersState] = useState([]);


	useEffect(() => {

		fetch(`http://localhost:3000/api/order/all/my`,
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setOrdersState(JSON.parse(JSON.stringify(result)));
				},

			)
	}, []);

	console.log(ordersState)

	return (
		<div className={styles.pa_orders}>
			{(ordersState.length == 0) ?
				"У вас еще нет заказов"
				:
				<table>
					<tr>
						<th className={styles.pa_orders_th_1}>Товары</th>
						<th className={styles.pa_orders_th_2}>Адрес</th>
						<th className={styles.pa_orders_th_3}>Статус</th>
						<th className={styles.pa_orders_th_4}>Сумма</th>
					</tr>

					{ordersState?.map((item: {address: string, price: string, status: string}, key) => (
						<tr key={key}>
							<td className={styles.pa_orders_products}>
								<a href="#">
									Просмотреть товары
								</a>
							</td>
							<td className={styles.pa_orders_address}>{item.address}</td>
							<td className={styles.pa_orders_status}>{item.status}</td>
							<td className={styles.pa_orders_amount}>{item.price} ₽</td>
						</tr>
					))}

					{/* <tr>
						<td className={styles.pa_orders_products}>Просмотреть товары</td>
						<td className={styles.pa_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orders_status}>Подтвердить получение</td>
						<td className={styles.pa_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orders_products}>Просмотреть товары</td>
						<td className={styles.pa_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orders_status}>Подтвердить получение</td>
						<td className={styles.pa_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orders_products}>Просмотреть товары</td>
						<td className={styles.pa_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orders_status}>Подтвердить получение</td>
						<td className={styles.pa_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orders_products}>Просмотреть товары</td>
						<td className={styles.pa_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orders_status}>Подтвердить получение</td>
						<td className={styles.pa_orders_amount}>168,90 ₽</td>
					</tr> */}
				</table>
			}

		</div>
	);
}

export default Orders;
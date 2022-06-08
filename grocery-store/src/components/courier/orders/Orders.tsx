import React, { useEffect, useState } from "react";
import styles from './Orders.module.scss'

const Orders = () => {
	const [ordersState, setOrdersState] = useState([]);


	useEffect(() => {

		fetch(`http://localhost:3000/api/order/all/courier`,
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
		<div>
			<div className={styles.courier_orders}>
				{(ordersState.length == 0) ?
					"У вас еще нет заказов"
					:
					<table>
						<tr>
							<th className={styles.courier_orders_th_1}>Товары</th>
							<th className={styles.courier_orders_th_2}>Адрес</th>
							<th className={styles.courier_orders_th_3}>Статус</th>
							<th className={styles.courier_orders_th_4}>Сумма</th>
						</tr>
						{ordersState?.map((item: { address: string, price: string, status: string }, key) => (
							<tr key={key}>
								<td className={styles.courier_orders_products}>
									<a href="#">
										Просмотреть товары
									</a>
								</td>
								<td className={styles.courier_orders_address}>{item.address}</td>
								<td className={styles.courier_orders_status}>{item.status}</td>
								<td className={styles.courier_orders_amount}>{item.price} ₽</td>
							</tr>
						))}
					</table>
				}
			</div>
		</div>
	);
}

export default Orders;
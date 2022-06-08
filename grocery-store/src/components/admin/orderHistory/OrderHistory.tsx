import styles from './OrderHistory.module.scss';
import React, { useEffect, useState } from "react";

const OrderHistory = () => {
	const [ordersState, setOrdersState] = useState([]);


	useEffect(() => {

		fetch(`http://localhost:3000/api/order/all/admin`,
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
		<>
			<div className={styles.pa_orderHistory}>
				<table>
					<tr>
						<th className={styles.pa_orderHistory_th_1}>Номер</th>
						<th className={styles.pa_orderHistory_th_2}>Товары</th>
						<th className={styles.pa_orderHistory_th_2}>Адрес</th>
						<th className={styles.pa_orderHistory_th_2}>Телефон</th>
						<th className={styles.pa_orderHistory_th_3}>Курьер</th>
						<th className={styles.pa_orderHistory_th_3}>Дата</th>
						<th className={styles.pa_orderHistory_th_4}>Сумма</th>
					</tr>
					<tr>
						<td className={styles.pa_orderHistory_address}>565456</td>
						<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
						<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orderHistory_address}>8 952 954 35 77</td>
						<td className={styles.pa_orderHistory_address}>Иванов Иван Иванович</td>
						<td className={styles.pa_orderHistory_address}>16.02.2022</td>
						<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orderHistory_address}>565456</td>
						<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
						<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orderHistory_address}>8 952 954 35 77</td>
						<td className={styles.pa_orderHistory_address}>Иванов Иван Иванович</td>
						<td className={styles.pa_orderHistory_address}>16.02.2022</td>
						<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orderHistory_address}>565456</td>
						<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
						<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orderHistory_address}>8 952 954 35 77</td>
						<td className={styles.pa_orderHistory_address}>Иванов Иван Иванович</td>
						<td className={styles.pa_orderHistory_address}>16.02.2022</td>
						<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.pa_orderHistory_address}>565456</td>
						<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
						<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.pa_orderHistory_address}>8 952 954 35 77</td>
						<td className={styles.pa_orderHistory_address}>Иванов Иван Иванович</td>
						<td className={styles.pa_orderHistory_address}>16.02.2022</td>
						<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
					</tr>
				</table>
			</div>
		</>
	);
}

export default OrderHistory;
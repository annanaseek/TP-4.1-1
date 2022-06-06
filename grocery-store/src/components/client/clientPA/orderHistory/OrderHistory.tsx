import React from "react";
import styles from "./OrderHistory.module.scss"

const OrderHistory = () => {
	return (
		<div className={styles.pa_orderHistory}>
			<table>
				<tr>
					<th className={styles.pa_orderHistory_th_1}>Товары</th>
					<th className={styles.pa_orderHistory_th_2}>Адрес</th>
					<th className={styles.pa_orderHistory_th_3}>Статус</th>
					<th className={styles.pa_orderHistory_th_4}>Сумма</th>
				</tr>
				<tr>
					<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.pa_orderHistory_status}>Собирается</td>
					<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.pa_orderHistory_status}>В пути</td>
					<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.pa_orderHistory_status}>В обработке</td>
					<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.pa_orderHistory_status}>Собирается</td>
					<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.pa_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.pa_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.pa_orderHistory_status}>В пути</td>
					<td className={styles.pa_orderHistory_amount}>168,90 ₽</td>
				</tr>
			</table>
		</div>
	);
}

export default OrderHistory;
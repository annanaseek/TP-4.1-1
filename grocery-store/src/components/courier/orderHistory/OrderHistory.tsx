import React from "react";
import styles from "./OrderHistory.module.scss"

const OrderHistory = () => {
	return (
		<div className={styles.courier_orderHistory}>
			<table>
				<tr>
					<th className={styles.courier_orderHistory_th_1}>Товары</th>
					<th className={styles.courier_orderHistory_th_2}>Адрес</th>
					<th className={styles.courier_orderHistory_th_3}>Дата</th>
					<th className={styles.courier_orderHistory_th_4}>Сумма</th>
				</tr>
				<tr>
					<td className={styles.courier_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.courier_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.courier_orderHistory_status}>12.11.2012</td>
					<td className={styles.courier_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.courier_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.courier_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.courier_orderHistory_status}>12.11.2012</td>
					<td className={styles.courier_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.courier_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.courier_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.courier_orderHistory_status}>12.11.2012</td>
					<td className={styles.courier_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.courier_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.courier_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.courier_orderHistory_status}>12.11.2012</td>
					<td className={styles.courier_orderHistory_amount}>168,90 ₽</td>
				</tr>
				<tr>
					<td className={styles.courier_orderHistory_products}>Просмотреть товары</td>
					<td className={styles.courier_orderHistory_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
					<td className={styles.courier_orderHistory_status}>12.11.2012</td>
					<td className={styles.courier_orderHistory_amount}>168,90 ₽</td>
				</tr>
			</table>
		</div>
	);
}

export default OrderHistory;
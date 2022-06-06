import React from "react";
import styles from './Orders.module.scss'

const Orders = () => {
	return (
		<div>
			<div className={styles.courier_orders}>
				<table>
					<tr>
						<th className={styles.courier_orders_th_1}>Товары</th>
						<th className={styles.courier_orders_th_2}>Адрес</th>
						<th className={styles.courier_orders_th_3}>Статус</th>
						<th className={styles.courier_orders_th_4}>Сумма</th>
					</tr>
					<tr>
						<td className={styles.courier_orders_products}>Просмотреть товары</td>
						<td className={styles.courier_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.courier_orders_status}>В обработке</td>
						<td className={styles.courier_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.courier_orders_products}>Просмотреть товары</td>
						<td className={styles.courier_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.courier_orders_status}>В обработке</td>
						<td className={styles.courier_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.courier_orders_products}>Просмотреть товары</td>
						<td className={styles.courier_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.courier_orders_status}>В обработке</td>
						<td className={styles.courier_orders_amount}>168,90 ₽</td>
					</tr>
					<tr>
						<td className={styles.courier_orders_products}>Просмотреть товары</td>
						<td className={styles.courier_orders_address}>г. Воронеж, Олимпийский бульвар 56, 888</td>
						<td className={styles.courier_orders_status}>В обработке</td>
						<td className={styles.courier_orders_amount}>168,90 ₽</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Orders;
import React from "react";
import styles from './Users.module.scss';
import Search from "../../ui/search/Search";

const Users = () => {
	return (
		<>
			<div className={styles.search_admin}>
				<Search />
			</div>
			<div className={styles.pa_users}>
				<table>
					<tr>
						<th className={styles.pa_users_th_1}>Номер</th>
						<th className={styles.pa_users_th_2}>Имя пользователя</th>
						<th className={styles.pa_users_th_3}>Телефон</th>
						<th className={styles.pa_users_th_3}>Статус</th>
						<th className={styles.pa_users_th_3}></th>
					</tr>
					<tr>
						<td className={styles.pa_users_numbers}>565456</td>
						<td className={styles.pa_users_name}>Василий</td>
						<td className={styles.pa_users_phone}>8 952 954 35 77</td>
						<td className={styles.pa_users_status}>Клиент</td>
						<td className={styles.pa_orderHistory_amount}>
							<img src="/edit.svg" alt="" />
						</td>
					</tr>
					<tr>
						<td className={styles.pa_users_numbers}>565456</td>
						<td className={styles.pa_users_name}>Василий</td>
						<td className={styles.pa_users_phone}>8 952 954 35 77</td>
						<td className={styles.pa_users_status}>Клиент</td>
						<td className={styles.pa_orderHistory_amount}>
							<img src="/edit.svg" alt="" />
						</td>
					</tr>
					<tr>
						<td className={styles.pa_users_numbers}>565456</td>
						<td className={styles.pa_users_name}>Василий</td>
						<td className={styles.pa_users_phone}>8 952 954 35 77</td>
						<td className={styles.pa_users_status}>Клиент</td>
						<td className={styles.pa_orderHistory_amount}>
							<img src="/edit.svg" alt="" />
						</td>
					</tr>
					<tr>
						<td className={styles.pa_users_numbers}>565456</td>
						<td className={styles.pa_users_name}>Василий</td>
						<td className={styles.pa_users_phone}>8 952 954 35 77</td>
						<td className={styles.pa_users_status}>Клиент</td>
						<td className={styles.pa_orderHistory_amount}>
							<img src="/edit.svg" alt="" />
						</td>
					</tr>
					<tr>
						<td className={styles.pa_users_numbers}>565456</td>
						<td className={styles.pa_users_name}>Василий</td>
						<td className={styles.pa_users_phone}>8 952 954 35 77</td>
						<td className={styles.pa_users_status}>Клиент</td>
						<td className={styles.pa_orderHistory_amount}>
							<img src="/edit.svg" alt="" />
						</td>
					</tr>
				</table>
			</div>
		</>
	);
}

export default Users;
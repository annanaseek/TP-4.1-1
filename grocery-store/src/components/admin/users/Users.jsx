import styles from './Users.module.scss';
import React, { useEffect, useState } from "react";

const Users = () => {
	const [usersState, setUsersState] = useState([]);


	useEffect(() => {

		fetch(`http://localhost:3000/api/user/all`,
			{
				mode: "cors",
				method: "GET"
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					setUsersState(JSON.parse(JSON.stringify(result)));
				},

			)
	}, []);

	console.log(usersState)
	return (
		<>
			<div className={styles.search_admin}>
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
					{usersState?.map((item, key) => (
						<tr>
							<td className={styles.pa_users_numbers}>{item.id}</td>
							<td className={styles.pa_users_name}>{item.name}</td>
							<td className={styles.pa_users_phone}>{item.phone}</td>
							<td className={styles.pa_users_status}>{item.role}</td>
						</tr>
					))}
				</table>
			</div>
		</>
	);
}

export default Users;
import React from "react";
import styles from "./Profile.module.scss"

const Profile = (props) => {

	function deleteUser() {
		console.log(props.user.id)
		fetch(`http://localhost:3000/api/user/${props.user.id}`,
			{ method: 'DELETE' })
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				localStorage.clear()
				window.location = 'http://localhost:3000/'
			})
			.catch(error => {
				console.error('There was an error!', error);
			});

		console.log('delete user')
	}

	function entranceFromAcc() {
		/* const obj = {
			url: window.location.href,
		} */
		fetch('http://localhost:3000/api/logout}',
			{
				method: 'POST',
				credentials: 'include'
			})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch(error => {
				console.error('There was an error!', error);
			});

		console.log('entrance')

	}

	return (
		<>
			<div className={styles.pa_profile}>
				<div className="row ">
					<div className={styles.pa_profile_item_name}>
						<div className={styles.pa_profile_item_title}>
							Имя
						</div>
						<div className={styles.pa_profile_item_text}>
							{props.user.name}
						</div>
					</div>
					<div className={styles.pa_profile_item_phone}>
						<div className={styles.pa_profile_item_title}>
							Телефон
						</div>
						<div className={styles.pa_profile_item_text}>
							{props.user.phone}
						</div>
					</div>
				</div>
				<div className={styles.pa_profile_item_pass}>
					<div className={styles.pa_profile_item_title}>
						Пароль
					</div>
					<div className={styles.pa_profile_item_text}>
						******
					</div>
				</div>
			</div>
			<div className="row">
				<div className={styles.pa_profile_btn1}>
					Редактировать
				</div>
				<button type="Submit" onClick={deleteUser} className={styles.pa_profile_btn2}>
					Удалить аккаунт
				</button>
			</div>
			<button type="Submit" onClick={entranceFromAcc} className={styles.pa_profile_btn_text}>
				Выйти из аккаунта
			</button>
		</>
	);
}

export default Profile;
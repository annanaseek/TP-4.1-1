import React from "react";
import styles from "./Profile.module.scss"

const Profile = () => {
	return (
		<>
			<div className={styles.pa_profile}>
				<div className="row ">
					<div className={styles.pa_profile_item_name}>
						<div className={styles.pa_profile_item_title}>
							Имя
						</div>
						<div className={styles.pa_profile_item_text}>
							Василий
						</div>
					</div>
					<div className={styles.pa_profile_item_phone}>
						<div className={styles.pa_profile_item_title}>
							Телефон
						</div>
						<div className={styles.pa_profile_item_text}>
							8(957) 555-98-55
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
				<div className={styles.pa_profile_item_card}>
					<div className={styles.pa_profile_item_title}>
						Привязанная карта
					</div>
					<div className={styles.pa_profile_item_text}>
						У вас нет привязанной карты. Нажмите редактировать, чтобы привязать
					</div>
				</div>
			</div>
			<div className="row">
				<div className={styles.pa_profile_btn1}>
					Редактировать
				</div>
				<div className={styles.pa_profile_btn2}>
					Удалить аккаунт
				</div>
			</div>
			<div className={styles.pa_profile_btn_text}>
				Выйти из аккаунта
			</div>
		</>
	);
}

export default Profile;
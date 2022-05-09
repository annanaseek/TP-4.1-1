import React from "react";
import styles from "./Profile.module.scss"

const Profile = () => {
	return (
		<>
			<div className={styles.courier_profile}>
				<div className="row">
					<div className={styles.courier_profile_item_name}>
						<div className={styles.courier_profile_item_title}>
							Имя
						</div>
						<div className={styles.courier_profile_item_text}>
							Василий
						</div>
					</div>
					<div className={styles.courier_profile_item_phone}>
						<div className={styles.courier_profile_item_title}>
							Телефон
						</div>
						<div className={styles.courier_profile_item_text}>
							8(957) 555-98-55
						</div>
					</div>
				</div>
				<div className="row">
					<div className={styles.courier_profile_item_pass}>
						<div className={styles.courier_profile_item_title}>
							Пароль
						</div>
						<div className={styles.courier_profile_item_text}>
							******
						</div>
					</div>
					<div className={styles.courier_profile_item_status}>
						<div className={styles.courier_profile_item_title}>
							Статус работы
						</div>
						<div className={styles.checkbox_ios}>
							<input type="checkbox"/>
							<span className={styles.checkbox_ios_switch}></span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.courier_profile_btn_text}>
				Выйти из аккаунта
			</div>
		</>
	);
}

export default Profile;
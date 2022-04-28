import React from "react";
import Header from '../../../components/layout/header/Header'
import Footer from "../../../components/layout/footer/Footer";
import './Profile.scss'
import { Container } from "../../../components/ui/grid";

const Profile = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className="pa_menu_items">
						<div className="pa_menu_item_active">
							Аккаунт
						</div>
						<div className="pa_menu_item">
							Заказы
						</div>
						<div className="pa_menu_item">
							История заказов
						</div>
					</div>
					<div>
						<div className="pa_profile">
							<div className="row ">
								<div className="pa_profile_item_name">
									<div className="pa_profile_item_title">
										Имя
									</div>
									<div className="pa_profile_item_text">
										Василий
									</div>
								</div>
								<div className="pa_profile_item_phone">
									<div className="pa_profile_item_title">
										Телефон
									</div>
									<div className="pa_profile_item_text">
										8(957) 555-98-55
									</div>
								</div>
							</div>
							<div className="pa_profile_item_pass">
								<div className="pa_profile_item_title">
									Пароль
								</div>
								<div className="pa_profile_item_text">
									******
								</div>
							</div>
							<div className="pa_profile_item_card">
								<div className="pa_profile_item_title">
									Привязанная карта
								</div>
								<div className="pa_profile_item_text">
									У вас нет привязанной карты. Нажмите редактировать, чтобы привязать
								</div>
							</div>
						</div>
						<div className="row">
							<div className="pa_profile_btn1">
								Редактировать
							</div>
							<div className="pa_profile_btn2">
								Удалить аккаунт
							</div>
						</div>
						<div className="pa_profile_btn_text">
							Выйти из аккаунта
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Profile;
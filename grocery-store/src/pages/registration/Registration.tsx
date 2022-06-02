import React from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Registration.scss'

const Registration = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="auth">
					<div className="auth_title">
						Станьте частью Продуктс
					</div>
					<div className="auth_items">
						<div className="auth_item">
							<div className="auth_item__title">
								Имя
							</div>
							<div className="auth_item__input">
								<input type="text" name="name" />
							</div>
						</div>
						<div className="auth_item">
							<div className="auth_item__title">
								Телефон
							</div>
							<div className="auth_item__input">
								<input type="text" name="phone" />
							</div>
						</div>
						<div className="auth_item">
							<div className="auth_item__title">
								Пароль
							</div>
							<div className="auth_item__input">
								<input type="text" name="pass" />
							</div>
						</div>
						<div className="auth_item">
							<div className="auth_item__title">
								Подтвердите пароль
							</div>
							<div className="auth_item__input">
								<input type="text" name="passConfirmation" />
							</div>
						</div>
					</div>
					<div className="center">
						<div className="registration_margin">
							<a href="/" className="registration_btn1">Зарегистрироваться</a>
						</div>
						<div>
							<a href="/authorization" className="registration_btn2">Авторизоваться</a>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Registration;
import React from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Authorization.scss'

const Authorization = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="auth">
					<div className="auth_title">
						Добро пожаловать в Продуктс
					</div>
					<div className="auth_items">
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
					</div>
					<div className="center">
						<div className="auth_margin">
							<a href="/" className="auth_btn1">Авторизоваться</a>
						</div>
						<div>
							<a href="/registration" className="auth_btn2">Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Authorization;
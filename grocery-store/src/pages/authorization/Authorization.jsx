import React from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Authorization.scss'

class Authorization extends React.Component {
	constructor(props) {
		super(props);
		this.state = []
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const obj = {
			username: this.phone.value,
			password: this.pass.value
		}

		fetch('http://localhost:3000/api/login', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
				'Accept-Encoding': 'gzip, deflate, br',
				'Connection': 'keep-alive'
			},
			body: JSON.stringify(obj)
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				(data.role == 'ADMIN') ?
					window.location = 'http://localhost:3000/admin/order-history'
					: (data.role == 'COURIER') ?
						window.location = 'http://localhost:3000/courier/profile'
						:
						window.location = 'http://localhost:3000/clientPA/profile'

				localStorage.setItem('id', data.id);
				localStorage.setItem('name', data.name);
				localStorage.setItem('phone', data.phone);
				localStorage.setItem('role', data.role);

			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	render() {

		return (
			<>
				<Header />
				<Container>
					<div className="auth">
						<div className="auth_title">
							Добро пожаловать в Продуктс
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="auth_items">
								<div className="auth_item">
									<div className="auth_item__title">
										Телефон
									</div>
									<div className="auth_item__input">
										<input type="text" name="phone" ref={(ref) => { this.phone = ref }} />
									</div>
								</div>
								<div className="auth_item">
									<div className="auth_item__title">
										Пароль
									</div>
									<div className="auth_item__input">
										<input type="password" name="pass" ref={(ref) => { this.pass = ref }} />
									</div>
								</div>
							</div>
							<div className="center">
								<div className="auth_margin">
									<button type="Submit" href="/" className="auth_btn1">Авторизоваться</button>
								</div>
								<div>
									<a href="/registration" className="auth_btn2">Зарегистрироваться</a>
								</div>
							</div>
						</form>
					</div>
				</Container>
				<Footer />
			</>
		);
	}
}

export default Authorization;
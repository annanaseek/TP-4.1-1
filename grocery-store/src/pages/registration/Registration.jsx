import React, { useEffect, useState } from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Registration.scss'

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const obj = {
			name: this.name.value,
			phone: this.phone.value,
			password: this.pass.value
		}

		fetch('http://localhost:3000/api/registration', {
			method: 'POST',
			mode: 'cors',
			//referrerPolicy: 'origin-when-cross-origin',
			credentials: 'include',
			//mode: 'same-origin',
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
				window.location = 'http://localhost:3000/authorization';
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		console.log(this.name.value)

	};



	render() {

		return (
			<>
				<Header />
				<Container>
					<div className="auth">
						<div className="auth_title">
							Станьте частью Продуктс
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="auth_items">
								<div className="auth_item">
									<div className="auth_item__title">
										Имя
									</div>
									<div className="auth_item__input">
										<input type="text" name="name" ref={(ref) => { this.name = ref }} />
									</div>
								</div>
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
										<input type="password" name="pass" className="auth_item__input" ref={(ref) => { this.pass = ref }} />
									</div>
								</div>
							</div>
							<div className="center">
								<div className="registration_margin">
									<button type="Submit" className="registration_btn1">Зарегистрироваться</button>
								</div>
								<div>
									<a href="/authorization" className="registration_btn2">Авторизоваться</a>
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

export default Registration;
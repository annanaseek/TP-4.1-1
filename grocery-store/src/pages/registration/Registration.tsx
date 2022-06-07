import React, { useEffect, useState } from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Registration.scss'

const Registration = () => {

	const [regState, setRegState] = useState([]);
	const [inputState, setInputState] = useState([{name: "", phone: "", pass: ""}])
	const apiUrl = process.env.BACKEND_CATALOG
	console.log(process.env.BACKEND_CATALOG)

	const obj = {
		phone: "",
		name: ""
	}

	useEffect(() => {

		fetch("http://localhost:3000/api/registration",
			{
				mode: "cors",
				method: "POST",
				body: JSON.stringify(obj)
			},
		)
			.then(response => response.json())
			.then(
				(result) => {
					setRegState(result);
				},
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
			)
	}, []);

	console.log(obj)

	return (
		<>
			<Header />
			<Container>
				<div className="auth">
					<div className="auth_title">
						Станьте частью Продуктс
					</div>
					<div className="auth_items">
						<form action="POST">
							<div className="auth_item">
								<div className="auth_item__title">
									Имя
								</div>
								<div className="auth_item__input">
									<input type="text" name="name"  value={obj.name}/>
								</div>
							</div>
							<div className="auth_item">
								<div className="auth_item__title">
									Телефон
								</div>
								<div className="auth_item__input">
									<input type="text" name="phone" value={obj.phone}/>
								</div>
							</div>
							<div className="auth_item">
								<div className="auth_item__title">
									Пароль
								</div>
								<div className="auth_item__input">
									<input type="password" name="pass" className="auth_item__input"/>
								</div>
							</div>
							<div className="auth_item">
								<div className="auth_item__title">
									Подтвердите пароль
								</div>
								<div className="auth_item__input">
									<input type="password" name="passConfirmation" className="auth_item__input"/>
								</div>
							</div>
						</form>
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
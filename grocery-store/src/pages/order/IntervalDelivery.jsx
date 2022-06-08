import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import './IntervalDelivery.scss'

class IntervalDelivery extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const obj = {
			addredd: this.address.value,
			interval: 0
		}

		fetch('http://localhost:3000/api/order/create', {
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
				alert('Заказ успешно оформлен')
				window.location = 'http://localhost:3000/';
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
					<form onSubmit={this.handleSubmit}>
						<div className="intervalDelivery">
							<div className="intervalDelivery_item">
								<div className="intervalDelivery_title">
									Адрес
								</div>
								<div className="intervalDelivery_input">
									<input type="text" name="address" placeholder="Москва, Московский проспект 12, 957" ref={(ref) => { this.address = ref }} />
								</div>
							</div>
							<div className="intervalDelivery_item">
								<div className="intervalDelivery_title">
									Комментарий
								</div>
								<div className="intervalDelivery_input">
									<textarea cols={10} name="comment" className="ordering_comment" />
								</div>
							</div>
						</div>
						<div className="intervalDelivery_btn_container">
							<button type="Submit" className="intervalDelivery_btn">Оформить заказ</button>
						</div>
					</form>
				</Container>
				<Footer />
			</>
		);
	}
}


export default IntervalDelivery;
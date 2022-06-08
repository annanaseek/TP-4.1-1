import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import styles from './Order.module.scss';

class Order extends React.Component {
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

		console.log(this.name.value)

	};

	render() {

		return (
			<>
				<Header />
				<Container>
					<form onSubmit={this.handleSubmit}>
						<div className={styles.ordering}>
							<div className={styles.ordering_item}>
								<div className={styles.ordering_title}>
									Имя
								</div>
								<div className={styles.ordering_input}>
									<input type="text" name="name" placeholder="Василий" />
								</div>
							</div>
							<div className={styles.ordering_item}>
								<div className={styles.ordering_title}>
									Телефон
								</div>
								<div className={styles.ordering_input}>
									<input type="text" name="phone" placeholder="8(957) 555-98-55" />
								</div>
							</div>
							<div className={styles.ordering_item}>
								<div className={styles.ordering_title}>
									Адрес
								</div>
								<div className={styles.ordering_input}>
									<input type="text" name="address" placeholder="Москва, Московский проспект 12, 957" ref={(ref) => { this.address = ref }} />
								</div>
							</div>
							<div className={styles.ordering_item}>
								<div className={styles.ordering_title}>
									Комментарий
								</div>
								<div className={styles.ordering_input}>
									<textarea cols={10} name="comment" className={styles.ordering_comment} />
								</div>
							</div>
						</div>
						<div className={styles.ordering_btn_container}>
							<button type="Submit" className={styles.ordering_btn}>Оформить заказ</button>
						</div>
					</form>
				</Container>
				<Footer />
			</>
		);
	}
}

export default Order;
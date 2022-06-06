import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import styles from './Order.module.scss';

const Order = () => {
	return (
		<>
			<Header />
			<Container>
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
							<input type="text" name="address" placeholder="Москва, Московский проспект 12, 957"/>
						</div>
					</div>
					<div className={styles.ordering_item}>
						<div className={styles.ordering_title}>
							Время доставки
						</div>
						<div>
							<select name="time" className={styles.ordering_select}>
								<option value="1" className={styles.ordering_option}>Как можно скорее</option>
								<option value="2" className={styles.ordering_option}>9:00</option>
								<option value="3" className={styles.ordering_option}>10:00</option>
								<option value="4" className={styles.ordering_option}>11:00</option>
							</select>
						</div>
					</div>
					<div className={styles.ordering_item}>
						<div className={styles.ordering_title}>
							Оплата
						</div>
						<div className={styles.ordering_select}>
							<select name="time">
								<option value="lion">Наличными при получении</option>
								<option value="tiger">Картой при получении</option>
							</select>
						</div>
					</div>
					<div className={styles.ordering_item}>
						<div className={styles.ordering_title}>
							Комментарий
						</div>
						<div className={styles.ordering_input}>
							<textarea cols={10} name="comment" className={styles.ordering_comment}/>
						</div>
					</div>
				</div>
				<div className={styles.ordering_btn_container}>
					<a href="#" className={styles.ordering_btn}>Оформить заказ</a>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Order;
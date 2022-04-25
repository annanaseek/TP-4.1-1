import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";

const IntervalDelivery = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="intervalDelivery">
					<div className="intervalDelivery_item">
						<div className="intervalDelivery_title">
							Имя
						</div>
						<div className="intervalDelivery_input">
							<input type="text" name="name" placeholder="Василий" />
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="ordering_title">
							Телефон
						</div>
						<div className="ordering_input">
							<input type="text" name="phone" placeholder="8(957) 555-98-55" />
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="ordering_title">
							Адрес
						</div>
						<div className="ordering_input">
							<input type="text" name="address" placeholder="Москва, Московский проспект 12, 957" />
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="ordering_title">
							Время доставки
						</div>
						<div className="ordering_select">
							<select name="time">
								<option value="lion">Как можно скорее</option>
								<option value="tiger">9:00</option>
								<option value="leopard">10:00</option>
								<option value="leopard">11:00</option>
							</select>
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="ordering_title">
							Оплата
						</div>
						<div className="ordering_select">
							<select name="time">
								<option value="lion">Наличными при получении</option>
								<option value="tiger">Картой при получении</option>
							</select>
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="ordering_title">
							Комментарий
						</div>
						<div className="ordering_input">
							<textarea cols={10} name="comment" className="ordering_comment" />
						</div>
					</div>
				</div>
				<div className="ordering_btn_container">
					<button className="ordering_btn">Оформить заказ</button>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default IntervalDelivery;
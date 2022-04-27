import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Container } from "../../components/ui/grid";
import './IntervalDelivery.scss'

const IntervalDelivery = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="intervalDelivery">
					<div className="intervalDelivery_item">
						<div className="intervalDelivery_title">
							Адрес
						</div>
						<div className="intervalDelivery_input">
							<input type="text" name="address" placeholder="Москва, Московский проспект 12, 957" />
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="intervalDelivery_title">
							Количество дней между доставками
						</div>
						<div className="intervalDelivery_input">
							<input type="text" name="days" />
						</div>
						<div className="intervalDelivery_describe">
							1 - каждый день, 2 - через день, 3 - через 2 дня и тп.
						</div>
					</div>
					<div className="intervalDelivery_item">
						<div className="intervalDelivery_title">
							Оплата
						</div>
						<div className="intervalDelivery_select">
							<select name="time">
								<option value="addCard">Добавить карту</option>
							</select>
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
					<button className="intervalDelivery_btn">Оформить заказ</button>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default IntervalDelivery;
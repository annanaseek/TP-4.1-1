import React from "react";
import Header from '../../components/layout/header/Header'
import Footer from "../../components/layout/footer/Footer";
import { Container } from "../../components/ui/grid";
import styles from './Courier.module.scss';
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Profile from "../../components/courier/profile/Profile";
import OrderHistory from "../../components/courier/orderHistory/OrderHistory";
import Orders from "../../components/courier/orders/Orders";

const Courier = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className={styles.pa_menu_items}>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/courier/profile"}>
								Аккаунт
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/courier/orders"}>
								Заказы
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/courier/order-history"}>
								История заказов
							</NavLink>
						</div>
					</div>
					<div>
						<Route path='/courier/profile' component={Profile} />
						<Route path='/courier/orders' component={Orders} />
						<Route path='/courier/order-history' component={OrderHistory} />
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Courier;
import React from "react";
import Header from '../../components/layout/header/Header'
import Footer from "../../components/layout/footer/Footer";
import { Container } from "../../components/ui/grid";
import styles from './ClientPA.module.scss';
import { Route } from "react-router-dom";
import Profile from "../../components/client/clientPA/profile/Profile";
import Orders from "../../components/client/clientPA/orders/Orders";
import OrderHistory from "../../components/client/clientPA/orderHistory/OrderHistory";
import { NavLink } from "react-router-dom";

const ClientPA = () => {

	const user = {
		id: localStorage.getItem('id'),
		name: localStorage.getItem('name'),
		phone: localStorage.getItem('phone'),
		role: localStorage.getItem('role'),
	}

	console.log(user)
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className={styles.pa_menu_items}>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/clientPA/profile"}>
								Аккаунт
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/clientPA/orders"}>
								Заказы
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/clientPA/orderHistory"}>
								История заказов
							</NavLink>
						</div>
					</div>
					<div>
						<Route path='/clientPA/profile'>
							<Profile user={user}/>
						</Route>
						<Route path='/clientPA/orders' component={Orders} />
						<Route path='/clientPA/orderHistory' component={OrderHistory} />
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default ClientPA;
import React from "react";
import Header from '../../components/layout/header/Header'
import Footer from "../../components/layout/footer/Footer";
import { Container } from "../../components/ui/grid";
import styles from './Admin.module.scss';
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Products from '../../components/admin/products/Products'
import OrderHistory from "../../components/admin/orderHistory/OrderHistory";
import Users from "../../components/admin/users/Users";

const Admin = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row_start">
					<div className={styles.pa_menu_items}>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/admin/orderHistory"}>
								История заказов
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/admin/products"}>
								Товары
							</NavLink>
						</div>
						<div className={styles.pa_menu_item}>
							<NavLink className={styles.pa_menu__item} activeClassName={styles.pa_menu_item_active} to={"/admin/users"}>
								Пользователи
							</NavLink>
						</div>
					</div>
					<div>
						<Route path='/admin/users' component={Users} />
						<Route path='/admin/products' component={Products} />
						<Route path='/admin/orderHistory' component={OrderHistory} />
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Admin;
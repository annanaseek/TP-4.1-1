import { Logo, Basket, Account } from "../../ui/icons/index";
import React from 'react';

import { Container } from "../../ui/grid/index";
import styles from "./Header.module.scss"


function Header() {
	return (
		<Container>
			<div className={`${styles.row} ${styles.header}`}>
				<div className={styles.logo}>
					<Logo />
				</div>

				<div className={`${styles.row}`}>
					<div className={styles.icons_container}>
						<Basket />
					</div>
					<Account />
				</div>
			</div>
		</Container>
	);
}

export default Header;
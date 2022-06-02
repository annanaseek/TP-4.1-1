import { Logo, Basket, Account } from "../../ui/icons/index";
import React from 'react';

import { Container } from "../../ui/grid/index";
import './Header.scss'


function Header() {
	return (
		<div className="header">
			<Container>
				<div className="row">
					<div className="logo">
						<a href="/">
							<Logo />
						</a>
					</div>

					<div className="row">
						<a href="/basket/Basket" className="icons_container">
							<Basket />
						</a>
						<a href="/registration/Registration">
							<Account />
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Header;
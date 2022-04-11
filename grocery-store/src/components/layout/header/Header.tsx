import { Logo, Basket, Account } from "../../ui/icons/index";
import React from 'react';

import { Container } from "../../ui/grid/index";
import './Header.scss'


function Header() {
	return (
		<Container>
			<div className="row header">
				<div className="logo">
					<Logo />
				</div>

				<div className="row">
					<div className="icons_container">
						<Basket />
					</div>
					<Account />
				</div>
			</div>
		</Container>
	);
}

export default Header;
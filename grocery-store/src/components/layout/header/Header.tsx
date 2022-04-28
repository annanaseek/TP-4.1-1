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
		</div>
	);
}

export default Header;
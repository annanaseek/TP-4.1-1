import './Footer.scss'
import { Logo } from '../../ui/icons';
import { Container } from '../../ui/grid';
import React from 'react';

function Footer() {
	return (
		<section className="footer_section">
			<hr className="hr_line" />
			<Container>
				<div className={`row footer`}>
					<div className={`logo`}>
						<Logo />
					</div>

					<div>
						<div className={`icons_container`}>
							Служба поддержки
						</div>
						+7 (356) 888 88 88
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Footer;
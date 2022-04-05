import styles from './Footer.module.scss'
import { Logo } from '../../ui/icons';
import { Container } from '../../ui/grid';
import React from 'react';

function Footer() {
	return (
		<Container>
			<div className={`${styles.row} ${styles.footer}`}>
				<div className={styles.logo}>
					<Logo />
				</div>

				<div>
					<div className={styles.icons_container}>
						Служба поддержки
					</div>
					+7 (356) 888 88 88
				</div>
			</div>
		</Container>
	);
}

export default Footer;
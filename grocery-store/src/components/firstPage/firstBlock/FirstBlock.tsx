import React from 'react';
import './FirstBlock.scss';
import { Container } from '../../ui/grid';
import Search from '../../ui/search/Search';

const FirstBlock = () => {
	return (
		<section>
			<Container>
				<div className="row center">
					<div className="firstBlock_text">
						<div className="first_title">
							Покупай продукты,<br />не выходя из дома
						</div>
						<div>
							<Search />
						</div>
					</div>
					<img className="first_title_img" src="./first_title.png" alt="" />
				</div>
			</Container>
			<div>
				<img className="green_line" src="./green_line.png" alt="" />
			</div>
		</section>
	);
}

export default FirstBlock;
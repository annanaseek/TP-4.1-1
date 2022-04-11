import React from "react";
import './AboutUs.scss'
import Title from "../../ui/title/Title";
import AboutUsItem from "./aboutUsItem/AboutUsItem";
import { Container } from "../../ui/grid";

const AboutUs = () => {
	return (
		<section className="aboutUs_section">
			<Container>
				<div className="aboutUsTitle">
					<Title>
						О нас
					</Title>
				</div>

				<div className="row center">
					<AboutUsItem
						number={1}
						text="Доставка продуктов<br /> в указанное время"
					/>

					<AboutUsItem
						number={2}
						text="Большой ассортимент"
					/>

					<AboutUsItem
						number={3}
						text="Интервальная доставка"
					/>
				</div>
			</Container>
		</section>
	);
}

export default AboutUs;
import React from "react";
import { Container } from "../../ui/grid";
import Title from "../../ui/title/Title";
import { Col } from "../../ui/grid";
import StocksItem from "./stocksItem/StocksItem";

import './Stocks.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Catalog = () => {
	return (
		<section className="stocks_section">
			<Container>
				<div className="stocksTitle">
					<Title>
						Акции
					</Title>
				</div>
				<a href="#" className="stocks_showAll">
					Показать все
				</a>
				<Swiper
					modules={[Scrollbar]}
					spaceBetween={175}
					slidesPerView={4}
					scrollbar={true}
				>
					<SwiperSlide
						className="slide"
					>
						<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="slide"
					>
						<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="slide"
					>
						<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="slide"
					>						
					<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="slide"
					>						
					<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="slide"
					>						
					<StocksItem 
							img="product.png"
							text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
							salePrice={45}
							price={50}
						/>
					</SwiperSlide>
				</Swiper>

			</Container>
		</section>
	);
}

export default Catalog;
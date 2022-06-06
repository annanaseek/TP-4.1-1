import React from "react";
import Footer from "../../../components/layout/footer/Footer";
import Header from "../../../components/layout/header/Header";
import { Container } from "../../../components/ui/grid";
import style from './slug.module.scss'

const slug = () => {
	return (
		<>
			<Header />
			<Container>
				<div className={`row ${style.product_slug}`}>
					<div className={style.product_img_slug}>
						<img src="/product2.png" alt="" />
					</div>
					<div className={style.product_slug_descript}>
						<div className={style.product_title}>
							Молоко «Вкуснотеево» 3,2 ультрапастеризованное, 925 мл
						</div>
						<div className={`row ${style.product_price_buttom}`}>
							<div className={style.product_price}>
								45 ₽
							</div>
							<div className={style.product__basket}>
								<span className={style.product_img_basket_margin}>
									<img src="/basket.svg" alt="" />
								</span>
								в корзину
							</div>
						</div>
						<div className={style.product_subtitle1}>
							Состав
						</div>
						<div className={style.product_text}>
							Изготовлена из нормализованных сливок коровьего молока и закваски.
						</div>

						<div className={style.product_subtitle}>
							Описание
						</div>
						<div className={style.product_text}>
							100% натуральный продукт. Молоко фильтруют сразу после дойки и охлаждают до 4-х градусов. Не содержит консервантов и красителей.
						</div>

						<div className={style.product_subtitle}>
							Пищевая ценность на 100 г
						</div>
						<div className={style.product_nutritional_value_items}>
							<div className={`${style.product_nutritional_value_item} row`}>
								<div className={style.product_nutritional_value_item__name}>
									Белки
								</div>
								<div className={style.product_nutritional_value_item__value}>
									2,5 г
								</div>
							</div>
							<div className={`${style.product_nutritional_value_item} row`}>
								<div className={style.product_nutritional_value_item__name}>
									Жиры
								</div>
								<div className={style.product_nutritional_value_item__value}>
									20 г
								</div>
							</div>
							<div className={`${style.product_nutritional_value_item} row`}>
								<div className={style.product_nutritional_value_item__name}>
									Углеводы
								</div>
								<div className={style.product_nutritional_value_item__value}>
									3,4 г
								</div>
							</div>
							<div className={`${style.product_nutritional_value_item} row`}>
								<div className={style.product_nutritional_value_item__name}>
									Калорийность
								</div>
								<div className={style.product_nutritional_value_item__value}>
									204 ккал
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default slug;
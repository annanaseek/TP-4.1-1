import React from "react";
import Header from '../../../components/layout/header/Header'
import Footer from '../../../components/layout/footer/Footer'
import { Container } from "../../../components/ui/grid";
import './AddCategory.scss'

const AddCategory = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row addcategoty">
					<div>
						<div className="add_category_photo"></div>
						<div className="add_category_btn">
							Добавьте фотографию
						</div>
					</div>

					<div>
						<div className="add_category__input">
							<input type="text" placeholder="Введите название категории" />
						</div>
						<div className="add_category__btn">
							Сохранить
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>

	);
}

export default AddCategory;
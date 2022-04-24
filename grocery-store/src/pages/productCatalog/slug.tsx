import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Search from "../../components/ui/search/Search";
import Filters from '../../components/filters/Filters';
import { Col, Container } from "../../components/ui/grid";
import ProductItem from "../../components/products/ProductItem";
import Pagination from "../../components/ui/pagination/Pagination";
import './slug.scss'

const Products_catalog = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="row">
					<div className="slug_filters">
						<Filters />
					</div>
					<div className="slug_catalog">
						<div className="slug_search">
							<Search />
						</div>
						<div className="row slug_items">
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
							<Col columns={3} className="slug_margin">
								<ProductItem
									img="product.png"
									text="Молоко «Вкуснотеево» 3,2 ультрапастеризованное"
									salePrice={0}
									price={45} />
							</Col>
						</div>
						<div className="slug_pagination">
							<Pagination />
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Products_catalog;
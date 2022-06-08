import React from "react";
import { BrowserRouter, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Search from "../ui/search/Search";
import { Container } from "../ui/grid";
import ProductItem from "../products/ProductItem";
import styles from "./slug.module.scss"

const SearchProducts = (props) => {

  console.log(props.location.state)

  /* fetch(`http://localhost:3000/api/product/search/${props.location.data}`,
			{
				method: "GET",
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					console.log(JSON.parse(JSON.stringify(result)))
					this.state.value = result;
				},

			) */

  return (
    <>
      <Header />
      <Container>
        <div className={styles.slug_catalog}>
          <div className={styles.slug_search}>
            <Search />
          </div>
          <div className={`row ${styles.slug_items}`}>
{/*             {(props.data.lengt)}
 */}            {/* {props.data?.map((item, key) => (
              <div className={styles.slug_margin} key={key}>
                <ProductItem
                  img={item.imageUrl}
                  text={item.name}
                  salePrice={0}
                  price={item.price} />
              </div>
            ))} */}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SearchProducts;
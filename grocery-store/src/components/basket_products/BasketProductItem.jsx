import React from "react";
import styles from './BasketProductItem.module.scss'


const BasketProductItem = (props) => {
  function deleteProduct() {
    console.log(props.id)
    fetch(`http://localhost:3000/api/basket/${props.id}`,
      { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location = 'http://localhost:3000/basket/Basket'
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

    console.log('delete product')
  }
  return (
    <div className={`row ${styles.basket_item}`}>
      <div className={styles.basket_img}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.basket_title}>
        {props.title}
      </div>
      <div className={`row center ${styles.basket_amount}`}>
        <span className={styles.basket_amount_text} id="amount-1">
          1 шт
        </span>
      </div>
      <div className={styles.basket_price}>
        {props.price} ₽
      </div>
      <button type="submit" onClick={deleteProduct} className={styles.basket_delete}>
        Удалить
      </button>
    </div>
  );
}

export default BasketProductItem;
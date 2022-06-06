import React from "react";
import styles from './BasketProductItem.module.scss'

const BasketProductItem = () => {

  const calcMinus = (id: number, sign: any) => {
		var amountProduct = document.getElementById(`#amount-${id}`)
/*     var elemProduct = amountProduct.
 */    /* var result = parseInt(amountProduct) + sign; */

/*     if (result < 0) return false;

    amountProduct.find(".time-label__info").val(result); */
}
  
  return (
    <div className={`row ${styles.basket_item}`}>
      <div className={styles.basket_img}>
        <img src="/product3.png" alt="" />
      </div>
      <div className={styles.basket_title}>
        Молоко «Вкуснотеево» 3,2 ультрапастеризованное, 925 мл
      </div>
      <div className={`row center ${styles.basket_amount}`}>
        <span className={styles.basket_btn_amount_minus}>
          -
        </span>
        <span className={styles.basket_amount_text} id="amount-1">
          1 шт
        </span>
        <span className={styles.basket_btn_amount_plus}>
          +
        </span>
      </div>
      <div className={styles.basket_price}>
        45 ₽
      </div>
    </div>
  );
}

export default BasketProductItem;
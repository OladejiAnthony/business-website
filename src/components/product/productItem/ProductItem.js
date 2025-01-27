import React from "react";
import styles from "./ProductItem.module.scss";
import Card from "../../card/Card";
import { Link } from "react-router-dom";

const ProductItem = ({ grid, product, id, name, price, desc, imageURL }) => {
  //all products properties passed into this component using spread operator

  //function to shorten texts
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$ ${price}`}</p>
          <h4>{shortenText(name, 18)}</h4>
        </div>

        {/*show description only in list view */}
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}

        {/*Cart */}
        <button className="--btn --btn-danger" onClick={() => {}}>
          Available
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;

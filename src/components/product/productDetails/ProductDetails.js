import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";
import spinnerImg from "../../../assets/spinner.jpg";
import { useDispatch, useSelector } from "react-redux";

import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { id } = useParams();
  //console.log(id);
  const [product, setProduct] = useState(null);
  //console.log(product)

  //reviews
  const { document } = useFetchDocument("products", id); //fetch products
  //console.log(document)
 

  //Get a single document from db
  const getProduct = async () => {
    //console.log("Getting Product")
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log(docSnap.data());
      const obj = {
        // adding id to the properties of our product
        id: id,
        ...docSnap.data(),
      };
      setProduct(obj);
    } else {
      toast.error("Product not found.");
    }
  };

  useEffect(() => {
    //getProduct();
    getProduct(document);
  }, [document]);

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; Back to Product</Link>
        </div>

        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            {/*SEO */}
            <Helmet>
              <title>{product.name} - eShop Ecommerce Website</title>
              <meta name="description" content={product.desc} />
              <meta property="og:title" content={product.name} />
              <meta property="og:description" content={product.desc} />
              <meta property="og:image" content={product.imageURL} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="product.item" />
              <meta property="og:price:amount" content={product.price} />
              <meta property="og:availability" content="instock" />
              <meta property="og:brand" content={product.brand} />
              <meta property="og:condition" content="new" />
            </Helmet>

            {/*Product Details */}
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{`$ ${product.price}`}</p>
                <p>{product.desc}</p>
                <p>
                  <b>SKU:</b> {product.id}
                </p>
                <p>
                  <b>Brand:</b> {product.brand}
                </p>
                {/* 
                <div className={styles.count}>
                  {isCartAdded < 0 ? null : (
                    <>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>{cart.cartQuantity}</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </>
                  )}
                </div> */}

                <button className="--btn --btn-danger" onClick={() => {}}>
                  <Link style={{color: "#fff"}} to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </>
        )}
        
      </div>
    </section>
  );
};

export default ProductDetails;

"use client";
import React from "react";
import styles from "./addToCart.module.scss";

const AddToCart = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Test Scss</h1>
      <button onClick={() => console.log("AddToCart")}>AddToCart</button>
    </div>
  );
};

export default AddToCart;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../../components/Header/Header";
import "./style.scss";
import { CartContext } from "../../context/cartContext";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/API/products/get`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleCartBtn = (product) => {
    addToCart(product);
    setAdded((prev) => ({...prev, [product._id]: true}));
    setTimeout(() => {
      setAdded((prev) => ({...prev, [product._id]: false}));
    }, 3000);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="shop-page">
      <Header />
      <h1>Accessories</h1>
      <div className="products-container">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <Card key={product._id}>
              <div className="image-container">
                <Card.Img
                  className="product-image"
                  variant="top"
                  src={product.imgUrl}
                />
              </div>
              <Card.Body>
                <Card.Title> {product.name}</Card.Title>
                <Card.Text>{`$${product.price}`}</Card.Text>
                <Button onClick={() => handleCartBtn(product)} variant={added[product._id] ? "light" : "outline-primary"} disabled={added[product._id]}>
                  <i className={added[product._id]? "bi bi-check-lg" : "bi bi-cart"}></i>
                  {added[product._id]? "Added": "Add To Cart"}
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;

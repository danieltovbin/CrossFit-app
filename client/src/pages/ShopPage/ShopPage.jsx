import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../../components/Header/Header";
import "./style.scss";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`API/Products/get-products`);
      setProducts(response.data);
      console.log("response", response);
      console.log("response data", response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

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
                <Card.Text>{`${product.price}$`}</Card.Text>
                <Button variant="outline-primary">
                  <i className="bi bi-cart"></i>
                  Add To Cart
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

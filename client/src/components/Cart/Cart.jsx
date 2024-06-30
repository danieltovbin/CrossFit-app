import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./style.scss";
import { CartContext } from "../../context/cartContext";
import axios from "axios";

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeFromCart = async (cartItemId) => {
    await axios.delete(`/API/cart/remove/${cartItemId}`);
    setCart(cart.filter((item) => item._id !== cartItemId));
  };

  return (
    <div>
      <i onClick={handleShow} className="bi bi-cart"></i>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center" }}>Your cart is empty..</p>
          ) : (
            cart.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "space-between",
                  margin: "auto",
                  marginBottom: "5px",
                }}
                key={index}
              >
                <div
                  style={{ display: "flex", lignItems: "center", gap: "30px" }}
                >
                  <img
                    style={{ width: "20px", height: "30px" }}
                    src={item.imgUrl}
                    alt=""
                  />
                  <h5 style={{ margin: "auto" }}>{item.name}</h5>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <p style={{ margin: "auto" }}>{`$${item.price}`}</p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item._id)}
                  >
                    remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;

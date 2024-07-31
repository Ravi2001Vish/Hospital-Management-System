import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { truncate } from "../util";

const OrdersDetails = () => {
  const [cartItems, setCartItems] = useState([]);
  const [path, setPath] = useState("");
  console.log(path);
  const [name, setName] = useState("Ravindra Vishwakarma");
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`http://localhost:5000/get-cart/${user.id}`)
      .then((res) => {
        setCartItems(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const calculateTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const changeName = () => {
    setName(inputValue);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <br /> <br /><br /><br /><br />
      <h1>{name}</h1>
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="change name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{outline:"none" , height:"30px" , borderRadius:'5px', border:"none", margin:"10px"}}
          />
        
          <button onClick={changeName} style={{height:"25px", display:"flex", alignItems:"center", margin:"0 auto"}}>Submit</button>
        </div>
      ) : (
        
        <button onClick={startEditing} style={{height:"25px", display:"flex", alignItems:"center", margin:"0 auto"}}>Edit</button>
      )}
      <br /><br /><br />
      <h3>Order History</h3>
      <br />
      <div>
        {cartItems &&
          cartItems.map((cart, ind) => (
            <div
              key={ind}
              style={{
                border: "1px solid rgb(238, 235, 235)",
                width: "80%",
                padding: "10px",
                margin: "5px auto",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                <div style={{ paddingRight: "0px", fontWeight: "bold" }}>
                  <p>Name: </p><span>{truncate(cart.title, 15)}</span>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p>Price: {cart.price}</p>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p>Quantity: {cart.quantity}</p>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p>
                    Total Price:{" "}
                    {calculateTotalPrice(cart.price, cart.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default OrdersDetails;

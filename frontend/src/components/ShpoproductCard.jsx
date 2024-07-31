import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ShpoproductCard({ product, path }) {
  const navigate = useNavigate();
  const{Partsproduct_id}=useParams()

  const cart = (partsproductid) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem("token")) {
      const data = { PartsproductID: partsproductid, userID: user.id }; // Ensure key name matches backend (partsproductID)
      axios.post('http://localhost:5000/add-to-cart', data)
        .then(res => {
          if (res.status === 200) {
            alert("Product has been added to your cart");
          } else {
            alert("Failed to add product to cart. Please try again.");
          }
        })
        .catch(err => {
          console.error("Error adding product to cart:", err);
          alert("Failed to add product to cart. Please try again.");
        });
    } else {
      navigate("/signup");
    }
  };

  return (
    <Card style={{ width: '100%', marginTop: "80px" }}>
      <img src={`${path}${product.image}`} alt="" height="200px" width="100%" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {product.name}
         <p> Price : ${product.price}</p>


        </Card.Text>
        <Button className='ms-4' onClick={() => cart('/Partsproduct  '+ Partsproduct_id)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ShpoproductCard;

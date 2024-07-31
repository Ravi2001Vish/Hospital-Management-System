import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import '../App.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/get-products')
      .then((res) => {
        setProducts(res.data.data);
        setPath(res.data.filepath);
        console.log(res.data.data);
      });
  }, []);

  // Slice the products array to get only the first 6 products
  const slicedProducts = products.slice(0, 6);

  return (
    <div className="productmedia homesec3">
  
      <Row>
        {
          slicedProducts.map((product, ind) => (
            <Col md={4} key={ind} className='mb-3'>
              <ProductCard product={product} path={path} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Products;

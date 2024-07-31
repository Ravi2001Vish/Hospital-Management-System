


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Col, Row, Form, Pagination } from 'react-bootstrap';
import '../App.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [path, setPath] = useState('');
  const [filters, setFilters] = useState({
    doctorDepartment: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    axios.get('http://localhost:9090/get-doctors')
      .then((res) => {
        setProducts(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.doctorDepartment ? product.doctorDepartment === filters.doctorDepartment : true)
    );
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="productmedia">
      <div style={{ width: "70%", margin: "0 auto", marginTop: "90px" }}>
        <div style={{ marginBottom: "30px", width: "100%", display: "flex", justifyContent: "end" }}>
          <div style={{ width: "20%", border: "1px solid red" }}>
            <Form.Group controlId="filterDoctorDepartment">
              <Form.Control
                as="select"
                name="doctorDepartment"
                value={filters.doctorDepartment}
                onChange={handleFilterChange}
              >
                <option value="">Search by Department 🡇</option>
                <option value="dental">Dental</option>
                <option value="neurologist">Neurologist</option>
                <option value="phycologist">Phycologist</option>
                <option value="cardiology">Cardiology</option>
                <option value="padiatric">Padiatric</option>
                <option value="pulmonary">Pulmonary</option>
                <option value="traumatology">Traumatology</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Row>
            {
              currentProducts && currentProducts.map((product, ind) => {
                return (
                  <Col md={3} key={ind} style={{ marginTop: "-80px" }}>
                    <ProductCard product={product} path={path} />
                    <br />
                  </Col>
                )
              })
            }
          </Row>
        </div>
        <Pagination style={{ justifyContent: 'center', marginTop: '20px' }}>
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default Products;

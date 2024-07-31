import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value) {
      performSearch(value);
    } else {
      setProducts([]);
    }
  };

  const performSearch = (title) => {
    axios.get(`http://localhost:5000/get-products?title=${title}`)
      .then((res) => {
        setProducts(res.data.data);
        setDropdownVisible(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onProductClick = () => {
    setDropdownVisible(false);
    setTitle('');
    setProducts([]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="search"
        value={title}
        onChange={onTitleChange}
        placeholder="Search"
        style={{ width: "100%", border: "1px solid lightgray", outline: "none", fontFamily:"cursive" }}
      />
      {products && products.length > 0 && dropdownVisible ? (
        <div style={{
          height: "200px", width: "220px", border: "1px solid lightgray", position: "absolute", zIndex: 99, left: 10, overflowY: 'scroll', background: '#fff'
        }}>
          {products.map((product) => (
            <p key={product._id} onClick={onProductClick}>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
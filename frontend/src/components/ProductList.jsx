// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import '../App.css';
// // import { useNavigate } from 'react-router-dom';
// // import ProductForm from './ProductForm'
// // const ProductList = ({ editProduct }) => {
// //   const [products, setProducts] = useState([]);
  
// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     const response = await axios.get('http://localhost:9090/get-doctors');
// //     setProducts(response.data.data);
// //   };

// //   const deleteProduct = async (id) => {
// //     await axios.delete(`http://localhost:9090/delete-doctor/${id}`);
// //     fetchProducts();
// //   };
  
// //   const navigate = useNavigate();

// //   return (
// //     <div className="doctor-list-container">
// //       <h2 className="doctor-list-heading">All Doctors</h2>
// //       <table className="doctor-table">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Phone</th>
// //             <th>DOB</th>
// //             <th>NIC</th>
// //             <th>Department</th>
// //             <th>Gender</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {products.map((product) => (
// //             <tr key={product._id} className="doctor-item">
// //               <td><b>{product.name}</b></td>
// //               <td>{product.email}</td>
// //               <td>{product.phone}</td>
// //               <td>{product.dob}</td>
// //               <td>{product.nic}</td>
// //               <td><b>{product.doctorDepartment}</b></td>
// //               <td>{product.gender}</td>
// //               <td>
// //                 <button className="edit-button" onClick={() => editProduct(product)}>Edit</button>
// //                 <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <button className='edit-button mt-3' onClick={() => navigate("/Adminpanel")}>Back</button>
// //       <button className='edit-button'>Add Doctor+</button>
// //       <div className='modalhome-admin'><ProductForm/></div>
// //     </div>
// //   );
// // };

// // export default ProductList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';
// import ProductForm from './ProductForm';

// const ProductList = ({ editProduct }) => {
//   const [products, setProducts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:9090/get-doctors');
//     setProducts(response.data.data);
//   };

//   const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:9090/delete-doctor/${id}`);
//     fetchProducts();
//   };
  
//   const navigate = useNavigate();

//   const openModal = () => {
//     setIsModalOpen(true);
//      window.location.href="ProductList"
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="doctor-list-container">
//       <h2 className="doctor-list-heading">All Doctors</h2>
//       <table className="doctor-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>DOB</th>
//             <th>NIC</th>
//             <th>Department</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id} className="doctor-item">
//               <td><b>{product.name}</b></td>
//               <td>{product.email}</td>
//               <td>{product.phone}</td>
//               <td>{product.dob}</td>
//               <td>{product.nic}</td>
//               <td><b>{product.doctorDepartment}</b></td>
//               <td>{product.gender}</td>
//               <td>
//                 <button className="edit-button" onClick={() => editProduct(product)}>Edit</button>
//                 <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className='edit-button mt-3' onClick={() => navigate("/Adminpanel")}>Back</button>
//       <button className='edit-button' onClick={openModal}>Add Doctor+</button>

//       {isModalOpen && (
//         <div className='modalhome-admin'>
//           <div className='modal-content'>
//             <span className='close-button' onClick={closeModal}>&times;</span>
//             <ProductForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';
// import ProductForm from './ProductForm';

// const ProductList = ({ editProduct }) => {
//   const [products, setProducts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:9090/get-doctors');
//     setProducts(response.data.data);
//   };

//   const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:9090/delete-doctor/${id}`);
//     fetchProducts();
//   };

//   const navigate = useNavigate();

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Calculate the products to display based on the current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Handle pagination
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="doctor-list-container">
//       <h2 className="doctor-list-heading">All Doctors</h2>
//       <table className="doctor-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>DOB</th>
//             <th>NIC</th>
//             <th>Department</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProducts.map((product) => (
//             <tr key={product._id} className="doctor-item">
//               <td><b>{product.name}</b></td>
//               <td>{product.email}</td>
//               <td>{product.phone}</td>
//               <td>{product.dob}</td>
//               <td>{product.nic}</td>
//               <td><b>{product.doctorDepartment}</b></td>
//               <td>{product.gender}</td>
//               <td>
//                 <button className="edit-button" onClick={() => editProduct(product)}>Edit</button>
//                 <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination" style={{ display:"flex",alignItems:"center", justifyContent:"end", gap:"10px"}}>
//         <button  style={{width:"80px",
//           height:"20px", display:"flex",alignItems:"center",  justifyContent:"center", backgroundColor:"black", color:"white", fontFamily:"cursive"}}  onClick={handlePrevPage} >Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button   style={{width:"80px",
//           height:"20px", display:"flex",alignItems:"center",  justifyContent:"center", backgroundColor:"black", color:"white", fontFamily:"cursive"}} onClick={handleNextPage} >Next</button>
//       </div>

//       <button className='edit-button mt-3' onClick={() => navigate("/Adminpanel")}>Back</button>
//       <button className='edit-button' onClick={openModal}>Add Doctor+</button>

//       {isModalOpen && (
//         <div className='modalhome-admin'>
//           <div className='modal-content'>
//             <span className='close-button' onClick={closeModal}>&times;</span>
//             <ProductForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const ProductList = ({ editProduct }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:9090/get-doctors');
    setProducts(response.data.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:9090/delete-doctor/${id}`);
    fetchProducts();
  };

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) => {
    const name = product.name ? product.name.toLowerCase() : '';
    const department = product.doctorDepartment ? product.doctorDepartment.toLowerCase() : '';
    const gender = product.gender ? product.gender.toLowerCase() : '';
    
    const searchTermLower = searchTerm.toLowerCase();

    return (
      name.includes(searchTermLower) ||
      department.includes(searchTermLower)||
      gender.includes(searchTermLower)
   
    );
  });

  // Calculate the products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="doctor-list-container">
      <h2 className="doctor-list-heading">All Doctors</h2>
      <input
        type="text"
        placeholder="Search by name or department..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px', padding: '5px', width: '20%', outline:"none"  }}
      />
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>NIC</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id} className="doctor-item">
              <td><b>{product.name}</b></td>
              <td>{product.email}</td>
              <td>{product.phone}</td>
              <td>{product.dob}</td>
              <td>{product.nic}</td>
              <td><b>{product.doctorDepartment}</b></td>
              <td>{product.gender}</td>
              <td>
                <button className="edit-button" onClick={() => editProduct(product)}>Edit</button>
                <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '10px' }}>
        <button style={{ width: '80px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white', fontFamily: 'cursive' }} onClick={handlePrevPage}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button style={{ width: '80px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white', fontFamily: 'cursive' }} onClick={handleNextPage}>Next</button>
      </div>

      <button className='edit-button mt-3' onClick={() => navigate("/Adminpanel")}>Back</button>
      <button className='edit-button' onClick={openModal}>Add Doctor+</button>

      {isModalOpen && (
        <div className='modalhome-admin'>
          <div className='modal-content'>
            <span className='close-button' onClick={closeModal}>&times;</span>
            <ProductForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;




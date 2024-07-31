// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';
// import AppointmentForm from './AppointmentForm'
// const AppointmentList = ({ editProduct }) => {
//   const [products1, setProducts1] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:9090/get-categories');
//     setProducts1(response.data.data);
//   };

//   const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:9090/delete-category/${id}`);
//     fetchProducts();
//   };

//   const getadmin = useNavigate();

//   return (
//     <div className="appointment-list-container">
//       <h2 className="appointment-list-heading">Appointment List</h2>
//       <table className="appointment-table">
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
//           {products1.map((product) => (
//             <tr key={product._id} className="appointment-item">
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
//       <button className='edit-button mt-3' onClick={() => getadmin("/Adminpanel")}>Back</button>
//       <button className='edit-button'>Add Appointment + </button>
//       <div className='adminappointment'><AppointmentForm/></div>
//     </div>
//   );
// };

// export default AppointmentList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';

const AppointmentList = ({ editProduct }) => {
  const [products1, setProducts1] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:9090/get-categories');
    setProducts1(response.data.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:9090/delete-category/${id}`);
    fetchProducts();
  };

  const getadmin = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="appointment-list-container">
      <h2 className="appointment-list-heading">Appointment List</h2>
      <table className="appointment-table">
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
          {products1.map((product) => (
            <tr key={product._id} className="appointment-item">
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
      <button className='edit-button mt-3' onClick={() => getadmin("/Adminpanel")}>Back</button>
      <button className='edit-button' onClick={openModal}>Add Appointment + </button>

      {isModalOpen && (
        <div className='adminappointment'>
          <div className='modal-content'>
            <span className='close-button' onClick={closeModal}>&times;</span>
            <AppointmentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;

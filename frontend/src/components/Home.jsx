


import React, { useState } from 'react';
import Hero from './Hero';
import CountUps from './CountUps'
import UserAppointmentform from './UserAppointmentform';
import './Home.css'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Hero />
      <br /><br />
      {/* */}
      <h1 style={{fontFamily:"cursive", color:"brown"}}>GET APPOINTMENT HERE</h1>
      <br />
      <div className="getappointment" >
        <div className="homebg">
          <h3 style={{ fontFamily: "cursive", color: "white" }}>OUR SPECIALITY</h3>
          <h6 style={{ fontFamily: "cursive", color: "wheat" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non corporis, ipsa earum dolorem eum temporibus delectus deserunt iure reprehenderit, expedita repellendus odit consequatur fuga ab recusandae rerum sunt hic quidem. Saepe cupiditate, quia eveniet culpa placeat libero molestias? Laboriosam sequi sed possimus, nobis quia nisi, alias at tempore voluptas sunt quasi 
          </h6>
        </div>
        <div className="homebg1">
          <h3 style={{ fontFamily: "cursive", color: "black" }}>SERVICES</h3>
          <h6 style={{ fontFamily: "cursive", color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos sed pariatur numquam iste libero cumque magnam soluta aut modi officiis at nemo doloremque blanditiis ea odit, assumenda quidem magni. Omnis dolores totam fuga consequuntur
          </h6>
          <button onClick={openModal}>GET APPOINTMENT</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modalhome" style={{zIndex:"2"}}>
          <div className="modal-content" >
            <span className="close-button" onClick={closeModal}>&times;</span>
            <UserAppointmentform />
          </div>
        </div>
      )}

<br /><br />
<h1 style={{fontWeight:"bolder"}}>SPECIALITIES</h1>
<br /><br />
<div class="card-container1">
    <div class="card1">
      <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg" alt="Shoulder"/>
      <h3>Shoulder</h3>
      <h6>Offering a wide variety of treatment options, Dr. McCormick is a leading shoulder surgeon in optimizing results, eliminating pain and reducing complications.</h6>
      <button>View More</button>
    </div>
    <div class="card1">
      <img src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hip"/>
      <h3>Hip</h3>
      <h6>Hip arthroscopy is a relatively new surgical technique that is an effective procedure to treat a variety of hip conditions. Arthroscopic hip surgery is one of the most innovative areas of orthopedic surgery.</h6>
      <button>View More</button>
    </div>
    <div class="card1">
      <img src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Knee"/>
      <h3>Knee</h3>
      <h6>With numerous alternatives to traditional knee surgery, from non-surgical to minimally invasive surgery options, Dr. McCormick will customize a plan of care to get you back to doing the things you love.</h6>
      <button>View More</button>
    </div>
    <div class="card1">
      <img src="https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cartilage & Meniscus"/>
      <h3>Cartilage & Meniscus</h3>
      <h6>Providing several advanced minimally invasive non-surgical and surgical options, Dr. McCormick is an established leader in restoring and repairing both cartilage and meniscus issues.</h6>
      <button>View More</button>
    </div>
    <div class="card1">
      <img src="https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Joint Preservation/PRP & Stem Cell Treatments"/>
      <h3>Joint Preservation/PRP & Stem Cell Treatments</h3>
      <h6>Don't let a painful joint limit your life. An innovative outpatient biologic surgery can restore articular cartilage to relieve pain, improve function and delay or prevent arthritis.</h6>
      <button>View More</button>
    </div>
    <div class="card1">
      <img src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="In-office Treatments"/>
      <h3>In-office Treatments</h3>
      <h6>With numerous alternatives to traditional knee surgery, from non-surgical to minimally invasive surgery options, Dr. McCormick will customize a plan of care to get you back to doing the things you love.</h6>
      <button>View More</button>
    </div>
  </div>
  <CountUps/> 
  <br />
    </>
  );
};

export default Home;

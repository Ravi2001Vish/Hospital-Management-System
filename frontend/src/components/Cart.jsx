

import "../App.css";
import img1 from '../react image/1.jpg';
import img2 from '../react image/2.jpg';
import img3 from '../react image/3.jpg';
import img4 from '../react image/4.jpg';
import img5 from '../react image/5.jpg';
import img6 from '../react image/6.jpg';
import img7 from '../react image/7.jpg';
import img8 from '../react image/8.jpg';

const Cart = () => {
 
 return (
  
<>
<div className="cart">
        <h1 style={{fontFamily:"cursive"}}>OUR DEPARTMENT</h1>
      </div>
      <br /><br />
      <div>
      <div style={{width:"80%", margin:"0 auto"}}>
        <h1 className="title">HOSPITAL DEPARTMENTS</h1><br />
        <div className="grid">
            <div className="card">
            <img src={img1} alt="Cardiology" />
                <h4>Cardiology</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img2} alt="Dental" />
                <h4>Dental</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img3} alt="Neurologist" />
                <h4>Neurologist</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img4} alt="Pediatric" />
                <h4>Pediatric</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img5} alt="Pulmonary" />
                <h4>Pulmonary</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img6} alt="Traumatology" />
                <h4>Traumatology</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img7} alt="Urology" />
                <h4>Urology</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img8} alt="Xray" />
                <h4>Xray</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
            <div className="card">
            <img src={img6} alt="Dental" />
                <h4>Dental</h4>
                <h6>Here's the story of a lovely lady, who was bringing three very lovely...</h6>
            </div>
        </div>
    </div>
      </div>
</>
     
     
  );
};

export default Cart;

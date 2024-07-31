import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row,} from "react-bootstrap";

import img12 from '../react image/sp1.png';
import img13 from '../react image/sp2.png'
import img14 from '../react image/pexels-andrea-piacquadio-3769747.jpg'
import img15 from '../react image/Screenshot_20240623_084531.png'
import { CiCalculator1 } from "react-icons/ci";
import CardForm from "./CardForm";




const Product = () => {

  const [product, setProduct] = useState({});
  const [path, setPath] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-product/6658321445f536e59905ac81`)
      .then((res) => {
        setProduct(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => console.log(err));
  },[]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMouseLeave = () => {
    setSelectedImage(null);
  };

  return (
    <div>
     
      <div className="allsingledata">
        <br /><br /><br />
      <div className="singledata">

        <div className="dataimg">
          <div>
            {selectedImage ? (
              <img
                src={`${path}/${selectedImage}`}
                className="w-100"
                alt="Selected"
                height="400px"
                style={{ border: "1px solid lightgray" }}
              />
            ) : (
              <img
                src={`${path}/${product.thumbnail}`}
                className="w-100"
                alt={product.title}
                height="400px"
              />
            )}
          </div>
          <div className="arrayimg">
            <Row style={{ margin: "20px auto" }}>
              <Col
                md={1}
                style={{
                  display: "flex",

                }}
              >
                {product.images && product.images.length > 0 && (
                  <>
                    {product.images.map((image, index) => (
                      <Col
                        key={index}
                        md={6}
                        style={{

                          width: "250px",
                          margin: "5px"

                        }}
                      >
                        <img
                          src={`${path}/${image}`}
                          className={`w-100 clickable-image ${selectedImage === image ? "selected" : ""
                            }`}
                          alt={`Product ${index + 1}`}
                          height="150px"
                          onMouseOver={() => handleImageClick(image)}
                          onMouseLeave={handleMouseLeave}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </Col>
            </Row>
          </div>
          <div>
            <br />
            <h3 style={{ textAlign: "start" }}>Vehicle overview</h3>
            <p style={{ textAlign: "start", color:"grey"}}>{product.description}</p>
            <br />
            <div><img src={img12} alt="copy" width="100%" height="500px" /></div>
            <div><img src={img13} alt="copy1" width="100%" height="500px" /></div>
          </div>
          <div>
            <br />
            <h3 style={{ textAlign: "start" }}>Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.219284441226!2d72.83061347492657!3d18.921685556799506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1396705485d%3A0x39d044e11af9ebfc!2sTaj%20Hotel!5e0!3m2!1sen!2sin!4v1719091318882!5m2!1sen!2sin" width="100%" height="450" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <br />
          <h3 style={{ textAlign: "start" }}>Contact</h3>
          <div id="contact">
            <div className="information">
              <br /><br />
              <h4>PHONE NO :</h4>+91 9685741236 <br /> +91 9685741236 <br /><br />
              <h4>WEB : </h4>
              yourname@email.com <br />
              yourwebsitename.com
              <br /><br />
              <h4>ADDRESS : </h4>
              Address goes here,
              <br />
              street, Crossroad 123.
            </div>
            <div className="information2"> <br />
              <h5>Get In Touch</h5>

              <input type="text" name="" id="" style={{ width: "250px" }} placeholder="Name*" /> <input type="text" name="" id="" style={{ width: "250px" }} placeholder="Email*" /> <br /><br />
              <input type="text" name="" id="" style={{ width: "500px" }} placeholder="Subject*" />
              <br /><br />
              <textarea name="" id="" cols="65" rows="8" placeholder="Your Massege*"></textarea> <br /><br />
              <button className="conbtn" onClick={() => window.location.href = "#"}>SEND</button>
            </div>
          </div>
          <br />
        </div>

        <div className="details">
           <div style={{ backgroundColor: "#4971fd", color: "white" }}>
            <p>BUY CAR ONLINE</p>

            <Row>
              <Col style={{ borderRight: "1px solid white" }} >OUR PRICE <br /><b>$2500</b></Col>
              <Col >MRSP <br /><b>$2500</b></Col>


            </Row>
            <br />
          </div>
          <div style={{backgroundColor:"#54595f", color:"white"}}>
            INSTANT SAVING: <b>$7000</b>
          </div>
          <br />
          <div style={{borderBottom:"3px solid #4971fd"}}>
            <h5 style={{textAlign:"start", color:"white"}}>DEALER INFO</h5>
            <br />
          </div>
          <br />

          <div  style={{display:"flex", alignItems:"center", justifyContent:"start", borderBottom:"2px solid grey", gap:"5px"}}>
            <div ><img src={img14} alt=""  width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
            <div  style={{textAlign:"start", color:"white"}}>Stylemix themes <br />
            Private Seller</div>
<br />
          </div>  
          <br />
    <p style={{textAlign:"start", color:"white"}}>  <b>MOB NO :</b> <span>9856451236</span></p>
  
      <div className="productdetails">
        <div className="singlebody">
          
          <div style={{width:"150px", borderBottom:"1px solid white"}}>BODY</div>
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.body}</b></div>
    
        </div>
   
   <br />
      </div>

      <div className="productdetails">
        <div className="singlebody">
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}>MILEAGE</div>
          <div  style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.mileage}</b></div>
        </div>
   
   <br />
      </div>

      <div className="productdetails">
        <div className="singlebody">
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}>TRANSMISSION</div>
          <div  style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.transmission}</b></div>
        </div>
   
   <br />
      </div>

      <div className="productdetails">
        <div className="singlebody">
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}>FUEL TYPE</div>
          <div  style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.fuel}</b></div>
        </div>
   
   <br />
      </div>

      <div className="productdetails">
        <div className="singlebody">
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}>YEAR</div>
          <div  style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.year}</b></div>
        </div>
   
   <br />
      </div>

      <div className="productdetails">
        <div className="singlebody">
          <div style={{width:"150px" ,borderBottom:"1px solid white"}}>DRIVE</div>
          <div  style={{width:"150px" ,borderBottom:"1px solid white"}}><b>{product.drive}</b></div>
        </div>
   
   <br />
      </div>
    <br />
       <div>
    
        <img src={img15} alt="screen"  width="100%" height="100px"/>
      </div> 
      <br />
      <div className="calculation">
<span style={{ color:"orange", fontSize:"50px"}}>
  <CiCalculator1/>
</span> <span style={{fontSize:"25px", fontWeight:"bold"}}>FINANCING CALCULATOR</span>

<br />
<CardForm/>
      </div>
        </div>
  
      </div>
      </div>
    
    </div>
  );
};

export default Product;

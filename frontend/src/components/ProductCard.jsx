import Card from "react-bootstrap/Card";



function ProductCard({ product, path }) {
  // const navigate = useNavigate();
  

  return (<>

  
    <Card
      style={{
        marginTop: "80px",
        width: "20rem",
        // height: "400px",
        textAlign: "start",
        fontSize: "15px",
      border:"none",
      borderRadius:"5px"
      }}
    >
      <div style={{margin:"0 auto"}}>
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          marginTop: "20px",
          margin: "10 auto",
        }}
        src={path + product.thumbnail}
        alt=""
      />
      </div>
  
      <span style={{ textAlign: "center", fontWeight: "bold", color: "brown",  marginTop:"12px"}}> 
        {" "}
        {product.name}
      </span>
      <Card.Body>
      <ul style={{listStyle:"none"}}>
      <li>
          <b>Email:</b> {product.email}
        </li>
        <li>
          <b>Phone:</b> {product.phone}
        </li>
        <li>
          <b>NIC:</b> {product.nic}
        </li>
        {/* <li>
          <b>DOB:</b> {product.dob}
        </li> */}
        <li>
          <b>Gender:</b> {product.gender}
        </li>
        <li>
          <b>Doctor Department:</b> {product.doctorDepartment}
        </li>
      </ul>
      </Card.Body>
      
    </Card>
    </>
  );
}

export default ProductCard;

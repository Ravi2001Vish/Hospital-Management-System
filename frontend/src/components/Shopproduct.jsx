import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{Row , Col , Container} from "react-bootstrap"
import ShpoproductCard from './ShpoproductCard'
import '../App.css'


const Shopproduct = () => {
  const [products ,setProducts] = useState([]);
  const [path, setPath] = useState('')
  useEffect(()=>{
    axios.get("http://localhost:5000/get-Partsproducts")
    .then((res)=>{
setProducts(res.data.data);
console.log(res.data.data)
setPath(res.data.filepath)

    })
  },[])
  return (
    <div  className="productmedia">
      
<Container>
   
      <Row >
        {
        
          products && 
          products.map((product , ind)=>{
            return(
              <Col md={4} key={ind} className='mb-3'>
                <ShpoproductCard product = {product} path={path}/>
            

              </Col>
            )
          })
        
}
      </Row>
      </Container>
      
    </div>
  )
}

export default Shopproduct




import Carousel from 'react-bootstrap/Carousel';

import img1 from '../react image/caro1.jpg'
import img2 from '../react image/caro2.jpg'
import img3 from '../react image/caro3.jpg'

function UncontrolledExample() {
  return (
    
        <Carousel>
    <Carousel.Item  style={{height:"38rem"}}>
     
     <img src={img1} alt=""  height="100px"  style={{borderRadius:"50%", marginTop:"50px", border:"1px solid white"}} />

<h5 style={{color:"white", marginTop:"10px"}}>JOHN DOE </h5   >
<p style={{color:"white"}}>Driver</p>
<p style={{color:"white", fontWeight:"bold", fontSize:"23px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsum maxime voluptate delectus sapiente veniam. <br/>  Sed voluptates assumenda totam magnam consequatur reiciendis est? Voluptatibus, <br/>  a. Obcaecati quas veniam blanditiis delectus numquam neque itaque incidunt. Delectus <br/>  voluptatem impedit natus, iste ipsum voluptatum fugiat assumenda! <br/>  Aliquid at rem, totam dolore aliquam doloremque ducimus.</p>
   
    </Carousel.Item>
    <Carousel.Item style={{height:"38rem"}}>
    <img src={img2} alt=""  height="100px"  style={{borderRadius:"50%", marginTop:"50px" , border:"1px solid white"}} />
     
    <h5 style={{color:"white", marginTop:"10px"}}>JOHN DOE </h5   >
<p style={{color:"white"}}>Driver</p>
<p style={{color:"white", fontWeight:"bold", fontSize:"23px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsum maxime voluptate delectus sapiente veniam. <br/>  Sed voluptates assumenda totam magnam consequatur reiciendis est? Voluptatibus, <br/>  a. Obcaecati quas veniam blanditiis delectus numquam neque itaque incidunt. Delectus <br/>  voluptatem impedit natus, iste ipsum voluptatum fugiat assumenda! <br/>  Aliquid at rem, totam dolore aliquam doloremque ducimus.</p>
  
    </Carousel.Item>
    <Carousel.Item style={{height:"38rem"}}>
   <img src={img3   } alt=""   height="100px"  style={{borderRadius:"50%", marginTop:"50px" , border:"1px solid white"}}/>
     
   <h5 style={{color:"white", marginTop:"10px"}}>JOHN DOE </h5   >
<p style={{color:"white"}}>Driver</p>
<p style={{color:"white", fontWeight:"bold", fontSize:"23px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsum maxime voluptate delectus sapiente veniam. <br/>  Sed voluptates assumenda totam magnam consequatur reiciendis est? Voluptatibus, <br/>  a. Obcaecati quas veniam blanditiis delectus numquam neque itaque incidunt. Delectus <br/>  voluptatem impedit natus, iste ipsum voluptatum fugiat assumenda! <br/>  Aliquid at rem, totam dolore aliquam doloremque ducimus.</p>
      
    </Carousel.Item>
  </Carousel>
   
  );
}

export default UncontrolledExample;
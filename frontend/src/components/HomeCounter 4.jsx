import React from "react";
import CountUp from "react-countup";
import { Container } from "react-bootstrap";

import '../App.css'
const counterdata = [
  {
    id: 1,
    start: 0,
    end: 200,
   
    para: "CARS FOR SALE",
    duration: 8,
  },

  {
    id: 2,
    start: 0,
    end: 5000,

 
    para: "DEALER REVIEWS   ",
    duration: 8,
  },
  {
    id: 3,
    start: 0,
    end: 6000,

  
    para: "VISITORS PER DAY",
    duration: 8,
  },
  {
    id: 4,
    start: 0,
    end: 3000,

    
    para: "VERIFIED DEALERS",
    duration: 8,
  },
];
const slicedProducts = counterdata.slice(3, 4);
const CountUps = () => {
  return (
   
   <Container>
        <div>
          {
            slicedProducts.map((elem, ind) => {
              console.log(counterdata)
              return (
                <div  key={ind} style={{textAlign:"center", width:"200px"}}>
               
               
               <p style={{fontSize:"60px", fontWeight:"bold"}}>
                      <CountUp
                        start={elem.start}
                        end={elem.end}
                        duration={elem.duration}
                      ></CountUp>
                      +
                    </p>
                    <p>{elem.para}</p>
                    
                   
               
                </div>
         );
            })}
        </div>
        </Container>
   
  );
};

export default CountUps;

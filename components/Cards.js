import React from "react";
import Link from 'next/link'
import Addslots from "../components/addslots";
import {useState} from 'react'
  
 function Cards({name,code}) {
  
  const [visible,setvisible]=useState(false);
  // const [visible0,setvisible0]=useState(false);
  return (
      <>
      <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
            .container {
                 }
            .main{
              font-family: 'Poppins', sans-serif;
            
              display: grid;
              height: 100%;
              width: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
             
              }
            ::selection{
              background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
            
              color: #fff;
            }



          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            
          }
          
          .card {
                background:#FFFFFF;
              width:100%;
              width:40rem;
            margin: 1rem;
            padding: 0.3rem;
            allign:center;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 3px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }
          .card:hover {
            transform: scale(1.2);
          }
          
          .card:hover,
          .card:focus,
          .card:active {
            color: #000000;
            border-color: #000000;
          }
          
          .card h2 {
            margin: 0 0 1rem 0;
            font-size: 1rem;
          }
          
          .card p {
            margin: 0;
            font-size: 1rem;
            line-height: 1;
          }
          `}
      </style>
      <div className="container">
      <div className="grid container">
          
          
          <Link href="#" >
            <a className="card" onClick={()=>{setvisible(!visible)}}>
            <h2>{name}</h2>
            <p>{code}</p>
              </a>
          </Link>
         
             </div>
      </div>


      {visible?<div className="">
          <Addslots qname={name} code={code}/>
      </div>:<></>}
    </>
  );
}
export default Cards;
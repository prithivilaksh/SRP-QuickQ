import React from "react";
  
 function Cards() {
  
  
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
            //background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
             
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
            max-width: 300px;
          }
          
          .card {
                background:#FFFFFF;
              width:100%;
              width:40rem;
            margin: 1rem;
            padding: 0.3rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 400px;
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
      <div className="grid">
          <a href="" className="card">
            <h2>ABC Hospital&emsp;</h2>
              </a>

          {/* <a href="" className="card">
            <h2>XYZ Bank&emsp;</h2>
               </a>

          <a href="" className="card">
            <h2>Lazy River&emsp;</h2>
             </a> */}
             </div></div>
    </>
  );
}
export default Cards;
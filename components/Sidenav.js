import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useState, useRef } from 'react'
import { Container,Nav, Navbar } from 'react-bootstrap'
import { useRouter } from 'next/router'
const Sidenav = () => {

  const { user, logout } = useAuth()
  const router = useRouter()
    const snav = useRef(0);
    const mai=useRef(0);

    function openNav() {
        // document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        // console.log(snav);
        mai.current.style.backgroundColor="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1))";
        snav.current.style.width="250px";
        //mai.current.style.marginLeft="500px";
        mai.current.style.marginTop="300px";
       // mai.current.style.fill="#0000";
      
      }
      
      function closeNav() {
        // document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
        // document.body.style.backgroundColor = "white";

        snav.current.style.width="0px";
        mai.current.style.marginLeft="0px";
        mai.current.style.marginTop="10px"
        mai.current.style.backgroundColor="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1))";
      }
   

    return (

       <>

          <style jsx>{`

          body {
              font-family: "Lato", sans-serif;
              background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));

              transition: .5s;
            }
        
            .sidenav {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));

              overflow-x: hidden;
              transition: 0.3s;
              padding-top: 60px;
            }
            
            .sidenav a {
              padding: 8px 8px 8px 32px;
              text-decoration: none;
              font-size: 25px;
              color: #818181;
              display: block;
              transition: 0.3s;
            }
            
            .sidenav a:hover {
              color: #f1f1f1;
            }
            
            .sidenav .closebtn {
              position: absolute;
              top: 0;
              right: 25px;
              font-size: 36px;
              margin-left: 50px;
            }
            
            #main {
              position: absolute;
              top: 15px;
       
          
              transition: margin-left .3s;
              padding:15px;
            }
            
            @media screen and (max-height: 450px) {
              .sidenav {padding-top: 15px;}
              .sidenav a {font-size: 18px;}
            }
            
            `}
        </style>
        
        <div id="mySidenav" ref={snav} className="sidenav">
            <Link href="#"><a  className="closebtn" onClick={()=>closeNav()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></a></Link>
           
           {user?(<>
            <Link href="#"><a >Your Slots</a></Link>
            <Link href="#"><a >Queues</a></Link>
            <Link href="#"><a >Your Queues</a></Link>
            <Nav.Link href="#" onClick={() => {logout().then(()=>{router.push('/login')})}}><a >LogOut</a></Nav.Link>
            {/* <Nav.Link onClick={() => {logout().then(()=>{router.push('/login')})}}> Logout
                </Nav.Link> */}


           </> ):<>
              
              

           <Link href="login" ><a >Login</a></Link>
            <Link href="signup"><a >sign up</a></Link>

           </>}

            
        </div>



        <div id="main" ref={mai}>
          <span style={{color:"white",cursor:"pointer"}} onClick={()=>openNav()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" className="bi bi-chevron-double-right" viewBox="0 0 16 16">  
  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
</svg></span>
        </div>


      

      </>



      );
}
 
export default Sidenav; 
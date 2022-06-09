import react from "react";
import Cards3 from "../components/Cards3";
import {useState,useEffect} from 'react'
import firebase from "firebase/app";
import { db } from "../firebase/initFirebase"; 
import { collection, query, orderBy,doc,where, onSnapshot } from "firebase/firestore";
import { useAuth } from '../context/AuthContext'

export default function Yourslots() {


   let x=1;
  const [qarray,setqarray]=useState([])
  const { user, signup ,loading} = useAuth()
  
  
  useEffect(()=>
  {
          let qu=[];
          const q = query(collection(db, "users"),where("email", "==",user.email));
          const unsubscribe = onSnapshot(q, (querySnapshot) => 
          {
              
              querySnapshot.forEach((doc) => {
                  console.log(doc.id)
                  qu=doc.data().bookedslots;
              });


              if(qu.length>0)
                {qu.sort(function ( a, b ) 
                  {
                    // console.log(a);
                      if ( a.endvalue.toDate() < b.endvalue.toDate() ) return -1;
                      if ( a.endvalue.toDate() > b.endvalue.toDate() )return 1;
                      return 0;
                  });
                }
                          console.log("===============================",qu)
                          let unique = [...new Set(qu)];
                    let i=0;
                    let today=new Date();
                    console.log(qu,"asasasas")
                    while(i<unique.length && (unique[i].endvalue.toDate().getHours() < today.getHours() -1))
                    {
                        i++;
                    }

                    let ans =[];
                    if(i<unique.length)
                     ans=unique.slice(i, unique.length);

                    setqarray(ans); 

              console.log("this is what u r looking for",qu);
                          
                        
          });
                    
              // console.log("read queue data from firebase -pl",qu.join(", "));
          
        
          
  },[])



  return (
    <>
    <style>{
      `.container {
  //padding: 0 2rem;
  
}
.bttt{
    margin-top:50px;
    color:#eaeaea;
}

.main {
  min-height: 90vh;
  //padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
 
  
}

// .footer {
//   display: flex;
//   flex: 1;
//   padding: 2rem 0;
//   border-top: 1px solid #eaeaea;
//   justify-content: center;
//   align-items: center;
// }

// .footer a {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1;
// }

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`      
}</style>
<main className="main" >

  {qarray && qarray.map(({code,qname,startvalue,endvalue})=>{
      x++;
    return (<Cards3 key={x} name={qname} code={code} startvalue={startvalue} endvalue={endvalue}/>)
  })}

        
        
  
</main>
   
</>
  )
}
 
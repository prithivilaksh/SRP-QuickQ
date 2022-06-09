import react from "react";
import Cards4 from "../components/Cards4";
import {useState,useEffect} from 'react'
import firebase from "firebase/app";
import { db } from "../firebase/initFirebase"; 
import { collection, query, orderBy,doc,where, onSnapshot } from "firebase/firestore";
import { useAuth } from '../context/AuthContext'

export default function Myslots() {


    let p=0;
  const [qarray,setqarray]=useState([])
  const { user, signup ,loading} = useAuth()
  const [qus,setqus]=useState([])
  

  
  // let temp=[];
  // let res=[];
  let temp=[];
  // let res=[];
  useEffect(()=>
  {
          
          const q = query(collection(db, "users"),where("email", "==",user.email));
          const unsubscribe = onSnapshot(q, (querySnapshot) => 
          {
                  // let i=1;
                querySnapshot.forEach((doc) => 
                {
                    // console.log(doc.id);
                    // console.log(doc.data().hisqueue,"kkkk")
                    // console.log(i);i++;
                    let c=doc.data().hisqueue;
                    console.log("his queue",c)
                    // if(temp.length>0)temp=temp.concat(c);

                    // if(temp.length>0)temp = [...temp, ...c];
                    console.log("cccccccccccc",c)
                    temp=[...c];
                    setqus(temp)
                    console.log(temp);
                });
                
                // setqus(temp)
                // console.log("loook here",qus)
                
          })
            
  },[])


  useEffect(()=>{


    let res=[];
    console.log("here is quuuuuuuuuus",qus)
    qus.map((qu)=>
            {
              console.log(qu,"heeeeeeeeeeeeeeeeeeeheeeeeeeee")
                
              
                const quer = query(collection(db, "queues"),where("code", "==",qu.code));
                const unsubscribe0 = onSnapshot(quer, (querSnapshot) => 
                {
                  // console.log("---------------=============================================================",res)
                  let ires=[];
                  
                    querSnapshot.forEach((doco) => 
                    {
                        console.log(doco.id)
                        
                          
                        ires=doco.data().bookedslots;
                        // console.log("sannnnnnnnnnuuuuuu",ires)
                        if(res.length>0){res=res.concat(ires);}
                        else {res=ires;}
                        // console.log("sannnnnnnnnnuuuu",res)
                        

                    
                          if(res.length>0)
                              {res.sort(function ( a, b ) 
                              {
                                // console.log(a);
                                  if ( a.endvalue.toDate() < b.endvalue.toDate() ) return -1;
                                  if ( a.endvalue.toDate() > b.endvalue.toDate() )return 1;
                                  return 0;
                              });
                              }
                          console.log("===============================",res)
                          
                        
                    });
                    let unique = [...new Set(res)];
                    let i=0;
                    let today=new Date();
                    console.log(unique[0].endvalue.toDate().getHours(),"asasasas")
                    while(i<unique.length && (unique[i].endvalue.toDate().getHours() < today.getHours() || (unique[i].endvalue.toDate().getHours() == today.getHours() && unique[i].endvalue.toDate().getMinutes() < today.getMinutes())))
                    {
                        i++;
                    }

                    let ans =[];
                    if(i<unique.length)
                     ans=unique.slice(i, unique.length);

                    setqarray(ans); 
                    // setqarray(res); 
                    
                })
                // console.log("sanjeeeeeeeeeeeeeeeeeeeeeeeeeeeeet",res)
                // setqarray(res); 
            })

  },[qus])

  // console.log(qarray,"this is what u r lookig for")



  return (
    <>
    <style>{
 `.container {
  padding: 0 2rem;
  
}
.bttt{
    margin-top:50px;
    color:#eaeaea;
}

.main {
  min-height: 90vh;
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
 
  
}

.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

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
  
  {qarray && qarray.map(({email,startvalue,endvalue,label,qcode})=>{
    p++;
    return (<Cards4 key={p} label={label} email={email} code={qcode} startvalue={startvalue} endvalue={endvalue}/>)
  })}

        
        
  
</main>
   
</>
  )
}
 
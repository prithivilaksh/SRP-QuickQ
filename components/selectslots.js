import Head from 'next/head'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { db } from "../firebase/initFirebase"
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { doc,setDoc,addDoc,getDocs,getFirestore,collection,query,orderBy,where, onSnapshot } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import date from 'date-and-time';
import Timeline from './timeline'
import firebase from "firebase/app";
import { Timestamp } from "firebase/firestore";
// import * as firebase from 'firebase/app'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
 
 


//changeeeeeeeeeeeeeeeeeeeeeeeee according to label in queue table



export default function Addslots({qname,code}) {
 
  const { user, signup ,loading} = useAuth()
  let k={};
  const [times,settimes]=useState([]);
  const [visible,setvisible]=useState(false);
  const [val,setval]=useState("Select Label");
  const [times2,settimes2]=useState([]);
  const [labels,setlabels]=useState({});
  const [labell,setlabell]=useState("");
  const [factor,setfactor]=useState(0);
  useEffect(()=>
  {
          const q =  query(collection(db, "queues"), where("code", "==",code));
          let slots=[],bookedslots=[];
          const unsubscribe = onSnapshot(q, (querySnapshot) => 
          {
              querySnapshot.forEach((doc) => {
                setlabels(doc.data().labels)
                k=doc.data().labels;
                
                console.log("holaaaaaaaaaaaaaa",k)
                slots=doc.data().slots;
                bookedslots=doc.data().bookedslots;
                });
              console.log("value=================",labels)

                let res=[];

              
                let j=0;
                console.log("here is it",slots,bookedslots)
                
                function compare( a, b ) {
                  if ( a.endvalue.toDate() < b.endvalue.toDate() ){
                    return -1;
                  }
                  if ( a.endvalue.toDate() > b.endvalue.toDate() ){
                    return 1;
                  }
                  return 0;
                }
                
                if(bookedslots)bookedslots.sort(compare);
                if(slots)
                slots.sort(compare);

                if(bookedslots && bookedslots.length>0)
                {
                        for(let i=0;i<bookedslots.length;)
                        {
                          while(j<slots.length && i<bookedslots.length && slots[j].endvalue.toDate()<=bookedslots[i].startvalue.toDate())
                          {
                              res.push(slots[j]);
                              j++;
                          }
                          if(j<slots.length && i<bookedslots.length)res.push({startvalue:slots[j].startvalue,endvalue:bookedslots[i].startvalue})
                          let nextstart=bookedslots[i].endvalue;i++;
                          while(j<slots.length && i<bookedslots.length && bookedslots[i].endvalue.toDate() <= slots[j].endvalue.toDate())
                          {
                            res.push({startvalue:nextstart,endvalue:bookedslots[i].startvalue})
                            nextstart=bookedslots[i].endvalue;
                            i++;
                          }
                          if(j<slots.length)res.push({startvalue:nextstart,endvalue:slots[j].endvalue})
                          j++;
        
                        }
        
                        while(j<slots.length){res.push(slots[j]);j++;}
                }
                else res=slots;
              console.log("res====",res)
              // settimes2(res)
              settimes(res)
              if(k[val]){console.log("true error");handleSelect(val);}
              else{console.log("correct error")}
              console.log("helooooo",k,val)




              let temp=[];
              times.map((time)=>{

                let k=time.endvalue.toDate();
                console.log("*******************************************************",k)
                k.setMinutes(k.getMinutes() - labels[e]);
                let alpha=Timestamp.fromDate(new Date(k));
                console.log("kilooooooooooooooooooooooooooooo",time.startvalue,alpha.toDate())
                if(k.getTime() > time.startvalue.toDate().getTime())
                  temp.push({startvalue:time.startvalue,endvalue:alpha})
              })

              settimes2(temp)
              
          })
          
  },[])
// },[factor,labell])

  


  const handleSelect=(e)=>{

    console.log(labels[e])
    setfactor(labels[e]);
    setlabell(e)
    console.log("hers is factor",factor)
    setval(e)

    console.log("--------------------------------------",labels)
    let temp=[];
    times.map((time)=>{

      let k=time.endvalue.toDate();
      console.log("*******************************************************",k)
      k.setMinutes(k.getMinutes() - labels[e]);
      let alpha=Timestamp.fromDate(new Date(k));
      console.log("kilooooooooooooooooooooooooooooo",time.startvalue,alpha.toDate())
      if(k.getTime() > time.startvalue.toDate().getTime())
        temp.push({startvalue:time.startvalue,endvalue:alpha})
    })

    settimes2(temp)
    setvisible(true)

    times.map((time)=>{
      console.log(time,"aaaaaaaaaaaaaa")
      console.log(time.startvalue.toDate());
      console.log(time.endvalue.toDate())
    })

    // let tempk=temp;
    // console.log("handle select triggered")
    // if(temp)tempk=temp.slice();
    // // settimes2(tempk)
    // console.log(times2)

  }



 
   
 
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
  min-height: 100vh;
 // padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
 
.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}
 
.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}
 
.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}
 
.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
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
 
.mybtn {
  color:white;
}

.txt-color-white{
  color:white;
}
 
` 
}</style>
    {/* <br className="" /> <br className="" /> <br className="" /> <br className="" /> */}
    <div className='text-center'>
    <DropdownButton

      // className='btn-dark'
      alignRight
      id={`dropdown-variants-seconday`}
      variant='secondary'
      title={val}
      
      onSelect={handleSelect}
    
        >
        {labels && Object.entries(labels).length>0 && Object.entries(labels).map((label)=>{
          return <Dropdown.Item  key={label[0]} eventKey={label[0]} selected={true} >{label[0]} </Dropdown.Item>
        })
        }
              
        
      </DropdownButton>
      </div>
    {visible && <Timeline times={times2} lab={labell} dur={factor} code={code} />}
</>
  )
    }

 


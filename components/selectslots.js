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
 
 
export default function Addslots({qname,code}) {
 
  const { user, signup ,loading} = useAuth()
  const [times,settimes]=useState([]);
  useEffect(()=>
  {
          const q =  query(collection(db, "queues"), where("code", "==",code));
          let value=[];
          const unsubscribe = onSnapshot(q, (querySnapshot) => 
          {
              querySnapshot.forEach((doc) => {
                value=doc.data().slots;
                });
              console.log("value=================",value)
              settimes(value)
          })
          
  },[])
 
   
 
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
  min-height: 100vh;
  padding: 4rem 0;
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
    <br className="" /> <br className="" /> <br className="" /> <br className="" />
    <Timeline times={times}/>
</>
  )
    }

 


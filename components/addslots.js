import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'
import { db } from "../firebase/initFirebase"
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { doc, setDoc,addDoc,getDocs ,getFirestore } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import date from 'date-and-time';
 
 
export default function Addslots({qname,code}) {
 
  const { user, signup ,loading} = useAuth()
    // const [qname,setqname]=useState("");
    const [tsarr,settsarr]=useState([]);
 
 
    const [startvalue,setstartvalue]=useState(new Date(0,0,0,0,1));
    const [endvalue,setendvalue]=useState(new Date(0,0,0,23,55));
    // const [prevendvalue,setprevendvalue]=useState(new Date(0,0,0,0,0));
 
   
    const [minstarttime,setminstarttime]=useState(new Date(0,0,0,0,1));
    const [maxstarttime,setmaxstarttime]=useState(new Date(0,0,0,23,54));
    const [minendtime,setminendtime]=useState(new Date(0,0,0,0,2));
    const [maxendtime,setmaxendtime]=useState(new Date(0,0,0,23,55));

    let o=1;
    const [labels,setlabels]=useState([]);
    const [tb2,settb2]=useState(20);
    const [tb1,settb1]=useState("");
   
 
 
    // const addqtouser=async (e)=>{
    //   e.preventDefault();
    //   var uniq = 'id' + (new Date()).getTime().toString().slice(5);
 
    //   const dataobj={
    //     code:uniq,
    //     qname:qname
    // };
 
 
 
    // let requs,reqid,arr=[dataobj];
    // const usersref = collection(db, "users");
    // const q = query(usersref, where("email", "==",user.email));
    //       const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     requs=doc.data();
    //     reqid=doc.id;
    //   });
 
 
 
//     console.log("sehereeeeeeeeeeeeee",requs,reqid)
//     if(requs.hisqueue)
//       arr = arr.concat(requs.hisqueue);
//     requs.hisqueue=arr;
 
   
// console.log(requs)
//     await setDoc(doc(db, "users",reqid),requs);
//     // await addDoc(collection(db, "user"),dataobj);
   
//     console.log("added qcode and name into user collection -pl")
//     }




    const addslotstodb=async (e) =>{
 
      
      const q = query(collection(db, "queues"), where("code", "==",code));
      const querySnapshot = await getDocs(q);
      let requs={},reqid;
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        requs=doc.data();
        reqid=doc.id;
        console.log(reqid)
      });
      requs.slots=tsarr;
      requs.labels=labels
      await setDoc(doc(db, "queues",reqid),requs);
      settsarr([]);setminstarttime(new Date(0,0,0,0,1));setminendtime(new Date(0,0,0,0,2));
      //-------------------------------------------------
      // db->queues-> where code==code add dataobj
  
      
      console.log("added into collection -pl        agaiiiiiin",requs)
  }
 
    const addtoslots=()=>{
        // e.preventDefault();
        // console.log(startvalue>endvalue)
        if(!startvalue || !endvalue || startvalue.getTime() >endvalue.getTime() || startvalue.getTime()>maxstarttime.getTime())return ;
        const dataobj={
            startvalue,
            endvalue
        };
        let arr=[];
        if(tsarr)arr=tsarr.slice();
        arr.push(dataobj);
        settsarr(arr)
        // setprevendvalue(new Date(endvalue+600000000000000000000));
       
        // let tempmin=[new Date(date.addMinutes(endvalue,1)),new Date(0,0,0,23,58)]
        // console.log("see this",new Date(Math.min(...tempmin)))
        // setminstarttime(new Date(Math.min(...tempmin)))
       
        setminstarttime(date.addMinutes(endvalue,1))
        setstartvalue(date.addMinutes(endvalue,1))
        setendvalue(date.addMinutes(endvalue,2))
        // setstartvalue(new Date(date.addMinutes(endvalue,1)))
       
        console.log('array=',tsarr)
       
      }
  

      const addlabel=()=>{
        // e.preventDefault();
        // console.log(startvalue>endvalue)
        if(tb1=="") return;
        console.log("inside label func")

        let temparr=[];
        if(labels)temparr=labels.slice();
        temparr.push({label:tb1,time:tb2});
        setlabels(temparr);
        settb1("");
        settb2(20);
       
      }
//  console.log(labels)
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
    {/* <br className="" /> <br className="" /> <br className="" /> <br className="" /> */}
  
    {/* <br></br> */}

    <div className=" container">
    <form className="form-inline">
        <div className=" text-center form-group mb-2">
          {labels.length>0 && <> Selected Labels </>} 
          { labels && labels.map(({label,time})=>{
            o++;
            return <div key={o}> {label} : {time}</div>
          })}
       </div>
      <div className="form-group mx-sm-3 mb-2 ">
        <label  className="text-white ">Label</label>
        <input type="text" className="form-control" id="labelname" value={tb1} onChange={(e)=>{settb1(e.target.value)}} placeholder="Simply give a name" /><br></br>
        <label  className="text-white ">Time in minutes</label>
        <input type="number" className="form-control" value={tb2} min={1} onChange={(e)=>{settb2(e.target.value)}} id="duration" placeholder={20}  />
        <br />
        <div className="text-center">
        <button type="button" onClick={addlabel} className=" btn btn-dark mx-2">Add Label</button>
        <button type="button" className="btn btn-dark mx-2" onClick={()=>{setlabels([])}} >clear</button>
        </div>
        
      </div>
      
    </form>

    </div>

    {tsarr.length>0?<div className='txt-color-white'>
        <p>selected slots</p> {tsarr.map((interval)=> {
 
            let start=interval.startvalue;
            let end=interval.endvalue;
 
            return (<> {start.getHours()}:{start.getMinutes()} to {end.getHours()}:{end.getMinutes()} ,  </>)
        })}
    </div>:<></>}
        <br></br>
    <div className="container">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
            <TimePicker
                renderInput={(params) => <TextField {...params} sx={{svg: { color: 'black' },input: { color: 'white' },label: { color: 'white' }
                }}
              />}
                label="start"
                value={startvalue}
                onChange={(newstartValue) => {
                    
                    setstartvalue(newstartValue);
                    setminendtime(date.addMinutes(newstartValue,1));
                    setendvalue(date.addMinutes(newstartValue,1))
                    // let x=[new Date(date.addMinutes(newstartValue,1)),new Date(0,0,0,23,58)]
                    // setminendtime(new Date(Math.min(...x)))
                   
                    // setendvalue(new Date(Math.min(x)));
                }}
                minTime={minstarttime}
                maxTime={maxstarttime}
                />
 
                <TimePicker
                renderInput={(params) => <TextField {...params} sx={{svg: { color: 'black' },input: { color: 'white' },label: { color: 'white' }}}/>}
                label="end"
                value={endvalue}
                onChange={(newendValue) => {
                    setendvalue(newendValue);
                }}
                minTime={minendtime}
                maxTime={maxendtime}
                />
             </Stack>
    </LocalizationProvider>
    <br></br>
    <button type="button" className="btn btn-dark mx-2" onClick={addtoslots} >add</button> 
    <button type="button" className="btn btn-dark mx-2" onClick={addslotstodb} > submit</button>
    <button type="button" className="btn btn-dark mx-2" onClick={()=>{settsarr([]);setminstarttime(new Date(0,0,0,0,1));setminendtime(new Date(0,0,0,0,2));}} >clear</button>
    
    </div>

    {/* <div className="container">
      <div className="bttt"><h2>Add slots</h2></div>
   
      <main className="main">
      <div className="wrapper">
      <div className="title-text">
        <div className="title login">Enter Name</div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <form action="#" className="login">
            <div className="field">
              <input type="text" name="qname" required value={qname} onChange={(e)=>{setqname(e.target.value)}} />
            </div>
        <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" onClick={addqtouser} value="Create"/>
             
            <button className="mybtn " onClick={addqtouser} > Create</button>
            
            </div>
              </form>
        </div>
      </div>
    </div>
      </main>
      </div> */}
</>
  )
    }

 


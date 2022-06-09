import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useState} from 'react'
import { db } from "../firebase/initFirebase" 
import { useAuth } from '../context/AuthContext'
import { doc, setDoc,addDoc,getDocs ,getFirestore } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
//import styles from '../styles/Sub.module.css'

export default function Subscribe() {

  const { user, signup ,loading,online} = useAuth()
  const router = useRouter()
  const [error,seterror]=useState(false)
    const [qcode,setqcode]=useState("");
  const addqtouserhissubq=async (e)=>
  {
        e.preventDefault();
        if(qcode=='' || !online()){console.log('offline');seterror(true);return;}
        else{
          const dataobj={
            code:qcode
          };
  
        let flag=false;
        const q0=query(collection(db,"queues"), where("code", "==",qcode));
        const querySnapshot0 = await getDocs(q0);
        querySnapshot0.forEach((doc) => {
          // if that queue exists in the list of queues
          dataobj.qname=doc.data().qname
          flag=true;
          router.push('/queues');
        
        });
        
  
        if(flag)
        {
      
                  let requs,reqid,arr=[dataobj];
                  const usersref = collection(db, "users");
                  const q = query(usersref, where("email", "==",user.email));
                  const querySnapshot = await getDocs(q);
                  querySnapshot.forEach((doc) => {
                      // doc.data() is never undefined for query doc snapshots
                      // console.log(doc.id, " => ", doc.data());
                      requs=doc.data();
                      reqid=doc.id;
                    });
                  // console.log("sehereeeeeeeeeeeeee",requs,reqid)
                  if(requs.hisubqueue)arr = arr.concat(requs.hisubqueue);
                  requs.hisubqueue=arr;
                  // requs.hisubqueue=[...new Set(requs.hisubqueue)]
                  // requs.hisubqueue.filter((v,i,a)=>a.findIndex(v2=>(JSON.stringify(v2) === JSON.stringify(v)))===i)
                  function getUniqueListBy(arr, key) {
                    return [...new Map(arr.map(item => [item[key], item])).values()]
                }
                
                  requs.hisubqueue = getUniqueListBy(requs.hisubqueue, 'code')
                  console.log("holaaaaaaaaaaaaaaaaaaaa",requs)
                  console.log("hola")
                  await setDoc(doc(db,"users",reqid),requs);
                  console.log("subscribed to a queue ")
        }
        else seterror(true);
        }
      



      // else errormsg

      
  }









  return (
    <>
    <style>{`.container {
  padding: 0 3rem;
}
.bttt{
    margin-top:50px;
    color:#eaeaea;
}
.main {
  min-height: 90vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper{
  overflow: hidden;
  max-width: 390px;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  margin-bottom: 140px;
}
.wrapper .title-text{
  display: flex;
  width: 200%;
}
.wrapper .title{
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.wrapper .slide-controls{
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  overflow: hidden;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 15px;
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

.wrapper .form-container{
  width: 100%;
  overflow: hidden;
}
.form-container .form-inner{
  display: flex;
  width: 200%;
}
.form-container .form-inner form{
  width: 50%;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.form-inner form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.form-inner form .field input{
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  border-radius: 15px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.form-inner form .field input:focus{
  border-color: #000000;
  // box-shadow: inset 0 0 3px #fb6aae; 
}
.form-inner form .field input::placeholder{
  color: #999;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder{
  color: #000000;
}
.form-inner form .pass-link{
  margin-top: 5px;
}
.form-inner form .signup-link{
  text-align: center;
  margin-top: 30px;
}
.form-inner form .pass-link a,
.form-inner form .signup-link a{
  color: #000000;
  text-decoration: none;
}
.form-inner form .pass-link a:hover,
.form-inner form .signup-link a:hover{
  text-decoration: underline;
}
form .btn{
  height: 50px;
  width: 100%;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

}
form .btn .btn-layer{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  //background: -webkit-linear-gradient(right,#003366,#004080,#0059b3, #0073e6);
background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
  border-radius: 15px;
  transition: all 0.4s ease;;
  
}
form .btn:hover .btn-layer{
  left: 0;
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

`   }</style>
    <div className="container">
      <Head>
        <title>QuickQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bttt text-center"><h2>Subscribe to a Queue</h2></div>
    
      <main className="main">
      <div className="wrapper">
      <div className="title-text">
        <div className="title login">Enter Code</div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <form action="#" className="login">
            <div className="field">
            <input type="text" name="qcode"  value={qcode} onChange={(e)=>{seterror(false);setqcode(e.target.value)}} required={true}/>
            </div>
            <br></br>

            <button type="submit" className="btn btn-dark" onClick={addqtouserhissubq}>Subscribe</button>
            {error &&<h4 className='text-center font-weight-bold text-danger'><br />Error</h4>}
        {/* <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" onClick={addqtouserhissubq} value="Subscribe"/>
            </div> */}
              </form>
        </div>
      </div>
    </div>
      </main>
      </div>

</>
  )
}

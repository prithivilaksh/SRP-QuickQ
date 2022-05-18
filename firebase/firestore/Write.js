import firebase from "firebase/app";
import { doc, setDoc,addDoc ,getFirestore, collection } from "firebase/firestore";
import { db } from "../initFirebase"; 
import { useState } from "react";

const write = () => {


    const [name,setName]=useState();
    const Senddata = async (e) =>{
            const dataobj={
                name: name
            };
            setName("")
            await addDoc(collection(db, "username"),dataobj);
            
            console.log("added into collection -pl")
        }
    
    return ( 

        <>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={Senddata}> send data</button>
        </>
    
     );
}
 
export default write;
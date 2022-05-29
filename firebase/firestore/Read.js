
import firebase from "firebase/app";
import { db } from "../initFirebase"; 


import { collection, query, orderBy,doc,where, onSnapshot } from "firebase/firestore";
import { useEffect,useState } from "react";





const read = () => {

    const [namearray,setnamearray]=useState([])
    const Readdata =()=>
    {
        const q = query(collection(db, "username"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data().name);
            });
            console.log("read data from firebase -pl", cities.join(", "));
        });
    }


    useEffect(()=>
    {
            const q = query(collection(db, "username"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => 
            {
                const arr = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id)
                    arr.push({id:doc.id,name:doc.data().name});
                });
                setnamearray(arr)
                console.log("read data from firebase -pl",arr.join(", "));
            })
            
    },[])


    return (  <>
        <button onClick={Readdata}> read data</button>
        {namearray.map(({id,name}) =>{
            return (
                <h1 key={id}>
                    username : {name}<br />
                </h1>
                
            )
        })
        }
    </>);
}
 
export default read;
import {useState} from 'react';
import { useRouter } from 'next/router'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TimelineDot from '@mui/lab/TimelineDot';
import { useAuth } from '../context/AuthContext'
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { db } from "../firebase/initFirebase"
import { doc,setDoc,addDoc,getDocs,getFirestore,collection,query,orderBy,where, onSnapshot } from "firebase/firestore";
import date from 'date-and-time';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const  Timeli= ({time,code}) => {
  const { user, signup ,loading} = useAuth()
  const router = useRouter()
    const go=()=>{
        setVisible(true);
      }
      const handleClickAway = () => {
          setVisible(false);
        };
      
        console.log("nowwwwwwwwwwwwwwwwwww",time)
      let p=time.startvalue.toDate(),q=time.endvalue.toDate();
      let a=p.getHours() + ":" +p.getMinutes();
      let b=q.getHours() + ":" +q.getMinutes();
      const [visible,setVisible]=useState(false);
      const [value, setValue] = useState(p);
      console.log(a,b)
      let c=value.getHours() + ":" + value.getMinutes();

      const addtimetobookedslots=async()=>
      {

          router.push('/')
          let dataobj={
            startvalue:value,
            endvalue: date.addMinutes(value,20)                                         //will changeeeeeeeee in futureeeeeeeeee
          }
          const q = query(collection(db, "queues"), where("code", "==",code));
          const querySnapshot = await getDocs(q);
          let requs={},reqid;
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            requs=doc.data();
            reqid=doc.id;
          });

          

          if(requs.bookedslots)requs.bookedslots.push(dataobj);
          else requs.bookedslots=[dataobj];
          
          await setDoc(doc(db, "queues",reqid),requs);

          let dataobj0={
            qname:requs.qname,
            code:requs.code,
            startvalue:value,
            endvalue: date.addMinutes(value,20)                                         //will changeeeeeeeee in futureeeeeeeeee
          }
          const q0 = query(collection(db, "users"), where("email", "==",user.email));
          const querySnapshot0 = await getDocs(q0);
          let requs0={},reqid0;
            querySnapshot0.forEach((doc) => {
            requs0=doc.data();
            reqid0=doc.id;
          });

          if(requs0.bookedslots)requs0.bookedslots.push(dataobj0);
          else requs0.bookedslots=[dataobj0];
          
          if(reqid0){
          await setDoc(doc(db, "users",reqid0),requs0);
          console.log("booked appointment",reqid0)
          }
          else console.log("appointment not booked")
        }




      return( <>

     
                  
                  <TimelineItem >
                      {/* <TimelineOppositeContent color="text.secondary">
                          {time}
                      </TimelineOppositeContent> */}
                    
                      <ClickAwayListener onClickAway={handleClickAway}>
                      <TimelineSeparator >
                            <TimelineDot />
                            
                            <>

                          

                            <TimelineConnector onClick={()=>go()}>
                          {visible && <>
                              
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={10}>
                                <TimePicker
                                renderInput={(params) => <TextField {...params} />}
                                value={value}
                                label="Start time"
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                minTime={p}
                                maxTime={q}
                              />
                              </Stack>
                              </LocalizationProvider>
                              
                                      </>}
                                      
                            </TimelineConnector>
                           {visible && <input type="button" onClick={addtimetobookedslots} value ="book slot" className="" />} 
                            </>
                            
                           
                      </TimelineSeparator>
                      </ClickAwayListener>
                      {/* {visible && } */}
                      <TimelineContent>{a} - {b} value selected : {c}</TimelineContent>
                  </TimelineItem>
                     
                  </>
              )
}
 
export default Timeli;
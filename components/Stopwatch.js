import { useEffect,useState } from 'react';
import Timer from "./Timer";
import ControlButtons from "./ControlButton";
import Cards from "./Cards";
import { useRouter } from 'next/router'
import firebase from "firebase/app";
import { doc,addDoc,getDocs,setDoc,getFirestore, collection,query,where } from "firebase/firestore";
import { db } from "../firebase/initFirebase" 
import { useAuth } from '../context/AuthContext'
  
function StopWatch({label,code}) {

  const { user, signup ,loading} = useAuth()
  const router = useRouter()
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };



  const addema=async (e)=>
  {
        e.preventDefault();
        // console.log(time)
      router.push('/queues')
        // if(qname==''){seterror(true);return;}
        // router.push('/yourqueues');

      let requs,reqid;
      const usersref = collection(db, "queues");
      const q = query(usersref, where("code", "==",code));
      const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          requs=doc.data();
          reqid=doc.id;
        });
      console.log("sehereeeeeeeeeeeeee",requs,reqid)
      // requs.label=
      // console.log(label)
      console.log(requs.labels,"kkkkkkkkkkkkkk")
      let EMA = ((time)/(60*1000)) * 0.5 + (parseInt(requs.labels[label]) * (0.5))
      requs.labels[label]=EMA;
      console.log('EEEEEEEEEEEMMMMMMMMMMAAAAAAAAAAAAAA',EMA)
    
    
      console.log(requs)
      await setDoc(doc(db, "queues",reqid),requs);
        
  }

  
  return (
      <>
          <style jsx>{` 
          .stop-watch{
                height: 200px;
                width: 500px;
                background-color: #FFFF;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                //margin-left:600px;
                padding: 4rem 0;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  box-sizing: border-box; 
                  overflow: hidden;
                max-width: 250px;
                //background: #fff;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0px 25px 20px rgba(0,0,0,0.1);

              
            }
            .container {
    padding:20px 50px 15px 50px;;
  }
  form .btn{
    height: 50px;
    width: 100%;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    padding-top:20px;
  }
  form .btn .btn-layer{
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    /*background: -webkit-linear-gradient(right,#003366,#004080,#0059b3
  , #0073e6);*/
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));

    border-radius: 15px;
    transition: all 0.4s ease;;
  }
  form .btn:hover .btn-layer{
    left: 0;
  }
  form .btn input[type="submit"]{
    height: 100%;
    height:40px;
    width: 100%;
    width:250px;
    z-index: 1;
    position: relative;
    background: #FFFFFF;
    border: none;
    color: #000000;
    padding-left: 0;
    border-radius: 15px;
    font-size:25px;
    font-weight: 500;
    cursor: pointer;
  }
  
           `}
          </style>
     <center><div className="container" > 
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
     
  
    </div>
    
  
     <form>
    <div className="btn">
              <input type="submit" onClick={addema} value="End Appointment"/>
              </div>
  </form></div></center> </>
  );
}
  
export default StopWatch;
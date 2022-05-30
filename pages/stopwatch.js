import { useEffect,useState } from 'react';
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButton";
import Cards from "../components/Cards";
  
function StopWatch() {
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
    padding:200px 50px 15px 50px;;
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
            <center><Cards /></center>
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
              <input type="submit" value="End Appointment"/>
              </div>
  </form></div></center> </>
  );
}
  
export default StopWatch;
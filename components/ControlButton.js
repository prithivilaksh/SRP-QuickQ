import React from "react";
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="btno btn-one"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btno btn-one" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="btno btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
      <>
      <style>
          {`
          .Control-Buttons {
                margin: 3rem 0;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                }
                
                .btn-grp {
                display: flex;
                align-items: center;
                justify-content: space-around;
             
                }

                .xx{
                  padding-top: 10px;
                padding-right: 10px;
                padding-bottom: 10px;
                padding-left: 10px;
                }
                
                .btno {
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                width: 14vw;
                height: 6vh;
                border-radius: 14px;
                margin: 0px 6px;
                display: flex;
                border: 2px solid #FF0F0;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                color: #FFFFFF;
                }
  
            .btn-one{
                background-color: #000000;
                width: 12vw;
                height: 8vh;
            }
          `}
      </style>

                


      
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
    </>
  );
}
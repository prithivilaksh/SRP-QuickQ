import React from "react";
  
export default function Timer(props) {
  return (
      <>

          <style jsx>{`
          
                        
                .timer{
                   // margin : 3rem 0;
                    width: 100%;
                    display: flex;
                    height: 12%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 35px;
                }
                
                .digits{
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 3rem;
                    color:  #FFFFF;
                }
                
                .mili-sec{
                    color:  #888888;
                }
                        
          
          `}
          </style>
      
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>

    </>
  );
}
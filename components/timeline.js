import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLi from './TimeLi'


export default function OppositeContentTimeline({times}) {

// let times=[[new Date(0,0,0,8),new Date(0,0,0,7,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)]]



  let i=0;
  return (
    <>
    <div>
    <React.Fragment>
      <Timeline >
        

        {times.map((time) => {
                            i=i+1;
                            console.log("time===============",time)
                            return (<TimeLi key={i} time={time}/>)
                              }
                    )
        }
    
      </Timeline>
    </React.Fragment>
    </div>

    

    </>
  );
}








// const Timeline = () => {
//     return (  
//     <>


//     </>);
// }
 
// export default Timeline;
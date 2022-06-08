import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLi from './TimeLi'


export default function OppositeContentTimeline({times,code,lab,dur}) {

// let times=[[new Date(0,0,0,8),new Date(0,0,0,7,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)]]


  console.log("laaaaaaaaaaaaaaaaaaaaaaaaaab",lab)
  let i=0;
  return (
    <>
    <div>
    <React.Fragment>
      <Timeline >
        

        {times && times.map((time) => {
                            i=i+1;
                            console.log("time===============",time)
                            return (<TimeLi key={i} lab={lab} dur={dur} time={time} code={code}/>)
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
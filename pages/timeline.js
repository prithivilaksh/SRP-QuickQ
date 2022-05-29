import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLi from '../components/TimeLi'


export default function OppositeContentTimeline() {

let times=[[new Date(0,0,0,8),new Date(0,0,0,18,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)],[new Date(0,0,0,8),new Date(0,0,0,18,45)]]



  let i=0;
  return (
    <React.Fragment>
      <Timeline >
        

        {times.map((time) => {
                            i=i+1;
                            return (<TimeLi key={i} time={time}/>)
                              }
                    )
        }
    
      </Timeline>
    </React.Fragment>
  );
}








// const Timeline = () => {
//     return (  
//     <>


//     </>);
// }
 
// export default Timeline;
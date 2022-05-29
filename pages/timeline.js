import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLi from '../components/TimeLi'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TimelineDot from '@mui/lab/TimelineDot';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
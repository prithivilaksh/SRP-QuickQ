import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {

let data=[{id:1,time:'00:00 am'},{id:2,time:'00:00 am'},{id:3,time:'00:00 am'},{id:4,time:'00:00 am'}]

  return (
    <React.Fragment>
      <Timeline position="alternate">
        
        {data.map(({id,time}) => {


           return( 
       
                <TimelineItem key={id}>
              {/* <TimelineOppositeContent color="text.secondary">
                {time}
              </TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{time}</TimelineContent>
            </TimelineItem>
         
           )
        })
        }
        

        {/* <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem> */}
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
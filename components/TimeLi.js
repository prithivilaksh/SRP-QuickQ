import * as React from 'react';
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

const  Timeli= ({time}) => {
    console.log(time)
    const go=()=>{
        setVisible(true);
      }
      const handleClickAway = () => {
          setVisible(false);
        };
      const [visible,setVisible]=React.useState(false);
      const [value, setValue] = React.useState( new Date("2020-01-01 12:00"));
      let a=time[0].getHours() + ":" + time[0].getMinutes();
      let b=time[1].getHours() + ":" + time[1].getMinutes();
      let c=value.getHours() + ":" + value.getMinutes();
      return( 
                  <TimelineItem >
                      {/* <TimelineOppositeContent color="text.secondary">
                          {time}
                      </TimelineOppositeContent> */}
                    
                      <TimelineSeparator >
                            <TimelineDot />
                            <ClickAwayListener onClickAway={handleClickAway}>

                            <TimelineConnector onClick={()=>go()}>
                          {visible && <>
                              
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                <TimePicker
                                renderInput={(params) => <TextField {...params} />}
                                value={value}
                                label="Start time"
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                minTime={time[0]}
                                maxTime={time[1]}
                              />
                              </Stack>
                              </LocalizationProvider>
                                      </>}
                            </TimelineConnector>
                            </ClickAwayListener>
                           
                      </TimelineSeparator>
                      <TimelineContent>{a} - {b} value selected : {c}</TimelineContent>
                  </TimelineItem>
              )
}
 
export default Timeli;
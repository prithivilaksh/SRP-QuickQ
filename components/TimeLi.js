import {useState} from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TimelineDot from '@mui/lab/TimelineDot';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import date from 'date-and-time';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const  Timeli= ({time}) => {
    const go=()=>{
        setVisible(true);
      }
      const handleClickAway = () => {
          setVisible(false);
        };
      const [visible,setVisible]=useState(false);
      const [value, setValue] = useState( new Date("2020-01-01 12:00"));
        console.log("nowwwwwwwwwwwwwwwwwww",time)
      let p=time.startvalue.toDate(),q=time.endvalue.toDate();
      let a=p.getHours() + ":" +p.getMinutes();
      let b=q.getHours() + ":" +q.getMinutes();
      console.log(a,b)
      let c=value.getHours() + ":" + value.getMinutes();
      return( <>

     
                  
                  <TimelineItem >
                      {/* <TimelineOppositeContent color="text.secondary">
                          {time}
                      </TimelineOppositeContent> */}
                    
                      <ClickAwayListener onClickAway={handleClickAway}>
                      <TimelineSeparator >
                            <TimelineDot />
                            
                            <>

                          

                            <TimelineConnector onClick={()=>go()}>
                          {visible && <>
                              
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={10}>
                                <TimePicker
                                renderInput={(params) => <TextField {...params} />}
                                value={value}
                                label="Start time"
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                minTime={p}
                                maxTime={q}
                              />
                              </Stack>
                              </LocalizationProvider>
                              
                                      </>}
                                      
                            </TimelineConnector>
                           {visible && <input type="button" onClick={()=>{console.log("hiiiii")}} value ="book slot" className="" />} 
                            </>
                            
                           
                      </TimelineSeparator>
                      </ClickAwayListener>
                      {/* {visible && } */}
                      <TimelineContent>{a} - {b} value selected : {c}</TimelineContent>
                  </TimelineItem>
                     
                  </>
              )
}
 
export default Timeli;
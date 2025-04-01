import { Stack, Typography,ImageList,ImageListItem } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import calendar from './img/calendar.png'
import Tour from './Tour/Tour';
import Wing from './Wing/Wing';
import Meeting from './Meeting/Meeting';
import Contest from './Contest/Contest';
import ASU from './ASU/ASU';
import './Event.css';

function Event() {
    return (
        <div className="Event">
            <Typography variant='h4' padding={2}>新歓イベントの紹介</Typography>
            <Typography variant='h6' padding={2}>新歓イベントのスケジュール</Typography>
            
            <img src={calendar} width={window.innerWidth*2/3} />
            <Stack spacing={2}>
                <Tour />
                <Contest />
            </Stack>
        </div>
    )
}

export default Event
import { Stack, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import calendar from './img/calendar.png'
import Tour from './Tour/Tour';
import Electronics from './Electronics/Electronics';
import Wing from './Wing/Wing';
import Meeting from './Meeting/Meeting';
import Contest from './Contest/Contest';
import ASU from './ASU/ASU';
import './Event.css';

function Event() {
    return (
        <div className="Event">
            <Typography variant='h4' padding={2}>新歓イベントの紹介</Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
                <ImageListItem key="2">
                    <img src={img_2} />
                </ImageListItem>
            </ImageList>
            <Typography variant='h6' padding={2}>新歓イベントのスケジュール</Typography>
            
            <img src={calendar} height={window.innerHeight/2}/>
            <Stack spacing={2}>
                <ASU />
                <Tour />
                <Electronics />
                <Contest />
            </Stack>
        </div>
    )
}

export default Event
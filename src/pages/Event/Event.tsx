import { Stack, Typography,ImageList,ImageListItem, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import calendar from './img/new_calender.png'
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
            <Card sx={{marginTop:2}}>
                <CardHeader title="倉庫見学のご案内" />
                <CardContent>
                    <Typography>
                        倉庫見学を希望される方は、メール（<a href="mailto:meister.shinkan2026@gmail.com">meister.shinkan2026@gmail.com</a>）、X、またはInstagramのいずれかで「見学したい日時」をお知らせください。新歓担当からの案内に従ってお越しください。
                    </Typography>
                </CardContent>
            </Card>
            <Stack spacing={2}>
                <Tour />
                <Contest />
            </Stack>
        </div>
    )
}

export default Event
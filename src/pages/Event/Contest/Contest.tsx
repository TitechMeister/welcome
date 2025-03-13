import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent, CardMedia, Button } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import video from './img/contest2023.mp4'

export default function Contest() {
    return (
        // <Card>
        <Card className='close'>
            <CardHeader title="模型飛行機コンテスト" />
            <CardMedia>
                <video controls width={"100%"}>
                    <source src={video} type="video/mp4" ></source>
                </video>
            </CardMedia>
            <CardContent>
                4/24(水)に説明会を行います。5/15(水)にコンテストを行います。詳細は説明会でお伝えします。
                <Button variant="outlined" color="primary" href="https://forms.gle/bhcp8ycpL7aeqjwU8" target="_blank" sx={{padding:2 , alignSelf:"center"}}>参加申し込み</Button>
            </CardContent>
        </Card>
    )
};
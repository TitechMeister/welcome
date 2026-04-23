import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent, CardMedia, Button } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import video from './img/contest2023.mp4'

export default function Contest() {
    return (
        // <Card>
        <Card>
            <CardHeader title="模型飛行機コンテスト" />
            <CardMedia>
                <video controls width={"100%"}>
                    <source src={video} type="video/mp4" ></source>
                </video>
            </CardMedia>
            <CardContent>
                2026年度の模型飛行機コンテストは、すでに募集を締め切りましたが、倉庫見学はまだまだ開催中なので、ぜひお越しください!!
            </CardContent>
        </Card>
    )
};
import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import video from './img/contest2023.mp4'

export default function Contest() {
    return (
        // <Card className='close'>
        <Card>
            <CardHeader title="模型飛行機コンテスト" />
            <CardMedia>
                <video controls width={"100%"}>
                    <source src={video} type="video/mp4" ></source>
                </video>
            </CardMedia>
            <CardContent>
                <Typography>
                    4/24(水)に説明会を行います。5/15(水)にコンテストを行います。詳細は説明会でお伝えします。
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                </ImageList>
            </CardContent>
        </Card>
    )
};
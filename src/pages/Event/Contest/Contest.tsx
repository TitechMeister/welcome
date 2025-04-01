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
                4/23(水)から5/13(火)にかけて5人1グループに分かれ模型飛行機を製作します!<br/>
                5/14(水)に製作した飛行機を飛ばして、飛距離を競います。<br/>
                <Button variant="outlined" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeUT7KhxjjGzTVq3KCg8kSQIP3GqXBGHlSgx39DoLjgAMzQbQ/viewform" target="_blank" sx={{padding:2 , alignSelf:"center"}}>参加申し込み</Button>
            </CardContent>
        </Card>
    )
};
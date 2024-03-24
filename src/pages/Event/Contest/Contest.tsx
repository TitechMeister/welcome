import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Contest() {
    return (
        <div className='close'>
            <Card>
                <CardHeader title="模型飛行機コンテスト" />
                <CardContent>
                    <Typography>
                        4/24(日)に説明会を行います。詳細は後日お知らせします。
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
        </div>
    )
};
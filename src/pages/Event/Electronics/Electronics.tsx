import { ImageList, ImageListItem, Button, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import video from './img/slot.mp4';


export default function Electronics() {
    return (
        <Card>
            <CardHeader title="作業体験(電装)" />
            <CardContent>
                <CardMedia>
                    <video controls width="100%">
                        <source src={video} type="video/mp4"/>
                    </video>
                </CardMedia>
                ATTiny2313を使ってスロットマシーンを作ります。
                4/10,4/13,4/14,4/17,4/24,4/28に行う予定です。
            </CardContent>
        </Card>
    )
};
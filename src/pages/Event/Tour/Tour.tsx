import { Typography, Card, CardHeader, CardContent, List, ListItem, Button } from '@mui/material';

export default function Tour() {
    return (
        <div>
            <Card>
                <CardHeader title="倉庫見学/作業体験" />
                <CardContent>
                    <Typography>
                        私たちが普段機体を製作している倉庫の見学、そして各班の作業体験を開催します!!
                    </Typography>
                    <Typography sx={{marginTop:1}}>
                        倉庫見学を希望される方は、メール（<a href="mailto:meister.shinkan2026@gmail.com">meister.shinkan2026@gmail.com</a>）、X、Instagramのどれかで「見学したい日時」を気軽に連絡してください！
                    </Typography>
                    <Typography sx={{marginTop:1}}>
                        連絡もらったら、新歓担当から案内を送るので、それに沿って来てもらえればOKです🙌
                    </Typography>
                    <Typography sx={{marginTop:1}}>お待ちしてます！</Typography>
                </CardContent>
            </Card>
        </div>
    )
};
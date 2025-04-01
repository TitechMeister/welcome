import { Typography, Card, CardHeader, CardContent, List, ListItem, Button } from '@mui/material';

export default function Tour() {
    return (
        <div>
            <Card>
                <CardHeader title="倉庫見学/作業体験" />
                <CardContent>
                    <Typography>私たちが普段機体を製作している倉庫の見学、そして各班の作業体験を開催します!!</Typography>
                </CardContent>
                <CardContent>
                    {/* 日程リスト */}
                    <List>
                        <Typography variant="h6">倉庫見学 日程</Typography>
                        <ListItem>4/9、4/10、4/16、4/17</ListItem>
                    </List>
                    <List>
                        <Typography variant="h6">作業場体験 日程</Typography>
                        <ListItem>翼班 : 4/7、4/9、4/10、4/14、4/16、4/17</ListItem>
                        <ListItem>Pフレーム班 : 4/8、4/9、4/13、4/16</ListItem>
                        <ListItem>プロペラ班 : 4/9、4/10、4/16、4/17</ListItem>
                        <ListItem>駆動班 : 4/10、4/17</ListItem>
                        <ListItem>電操班 : 4/7、4/10、4/11、4/14、4/17、4/18</ListItem>
                        <ListItem>フェアリング班 : 4/7、4/14</ListItem>
                    </List>
                    <Button variant="outlined" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd93cDtUd5lHvC5iaYGXaGag2spyG6BOaS7FxnMroljVNN2jA/viewform" target="_blank" sx={{ padding: 2, alignSelf: "center" }}>参加申し込み</Button>
                </CardContent>
            </Card>
        </div>
    )
};
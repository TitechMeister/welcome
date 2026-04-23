import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_map from './img/bluedoor.png'

function Access() {
    return (
        <div className="Interview">
            <Typography variant='h4'>アクセス</Typography>
            <img src={img_map} alt="Meister倉庫の外観" width={window.innerWidth * 0.8} />
            <Typography>
                大岡山駅から東京科学大の正門を入り、左の道を進んで約5分。セブンイレブンの向かいにある青い扉が、Meisterの活動場所（倉庫）です。
            </Typography>
            <Typography>
                少しでも興味がある方や、「どんなことやってるの？」と気になっている方は、ぜひ気軽に見学に来てください！
            </Typography>
            <Typography>
                直接来ていただいてもOKですが、部員がいない場合もあるので、できるだけ事前にメール・Instagram・Xのいずれかでご連絡をお願いします。
            </Typography>
            <Typography>
                見学の流れについては「新歓イベント」ページにまとめているので、そちらもぜひチェックしてみてください！
            </Typography>
        </div>
    )
}

export default Access

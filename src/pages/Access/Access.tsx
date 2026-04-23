import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_map from './img/bluedoor.png'

function Access() {
    return (
        <div className="Interview">
            <Typography variant='h4'>アクセス</Typography>
            <img src={img_map} width={window.innerWidth * 0.8}></img>
            <Typography>
                大岡山から科学大の正門に入り、左の道路に入って5分ほど歩くと、セブンイレブンの真向かいに青い扉があります。
                この青い扉がMeisterの活動場所(倉庫)です。Meisterに興味のある方、質問がある方、是非見学に来て下さい。
            </Typography>
            <Typography>
                直接活動場所に来ても大丈夫ですが、部員がいないこともあるため、できるだけ事前に連絡先(
                  <a href="mailto:meister.shinkan2026@gmail.com">メール</a>、
                  <a href="https://www.instagram.com/tokyotechmeister_pr?igsh=MW1ieTdmdmt1d3Mxcw%3D%3D&utm_source=qr">Instagram</a>、
                  <a href="https://x.com/meister_welcome">X</a>
                  のいずれか )まで連絡をしてください。
            </Typography>
            <Typography>
                倉庫見学の詳しい流れは「新歓イベント」ページに掲載しています。見学希望の方はそちらをご確認ください。
            </Typography>
        </div>
    )
}

export default Access

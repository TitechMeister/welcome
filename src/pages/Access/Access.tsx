import { Typography } from '@mui/material';
import img_map from './img/bluedoor.png'

function Access() {
    return (
        <div className="Interview">
            <Typography variant='h4'>アクセス</Typography>
            <img src={img_map} width={window.innerWidth * 0.8}></img>
            <Typography>
                大岡山から東工大の正門に入り、左の道路に入って5分ほど歩くと、セブンイレブンの真向かいに青い扉があります。
                この青い扉がMeisterの活動場所(倉庫)です。Meisterに興味のある方、質問がある方、是非見学に来て下さい。
            </Typography>
            <Typography>
            直接活動場所に来ても大丈夫ですが、部員がいないこともあるため、できるだけ事前に連絡先(
                  <a href="meister.shinkan2025@gmail.com">メール</a>、
                  <a href="https://x.com/meister_welcome">Twitter</a>、
                  <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">LINE</a>、
                  <a href="https://www.instagram.com/tokyotechmeister_pr?igsh=MW1ieTdmdmt1d3Mxcw%3D%3D&utm_source=qr">Instagram</a>
                  のいずれか )まで連絡をしてください。
            </Typography>
        </div>
    )
}

export default Access

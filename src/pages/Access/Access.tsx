import { Typography } from '@mui/material';
import img_map from './img/bluedoor.png'

function Access() {
    return (
        <div className="Interview">
            <Typography variant='h4'>アクセス</Typography>
            <img src={img_map} width={window.innerWidth * 0.8}></img>
            <Typography>
                大岡山�?から東工大の正門に入り、左の道路に入って5�?ほど歩くと、セブンイレブンの真向かいに青い扉があります�?
                こ�?�青い扉がMeisterの活動�?�所(倉庫)です�?Meisterに興味のある方、質問�?�ある方、是非見学に来て下さ�??�?
            </Typography>
            <Typography>
            直接活動�?�所に来ても大丈夫ですが�?部員がいな�?こともあるため、できる�?け事前に連絡�?(
                  <a href="mailto:meisterwelcome2021@gmail.com">メール</a>�?
                  <a href="https://twitter.com/Meister_2023">Twitter</a>�?
                  <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">LINE</a>
                  の�?ずれ�? )まで連絡をしてください�?
            </Typography>
        </div>
    )
}

export default Access

import { Stack, Typography } from '@mui/material';

import QACard from '../../component/QACard';

function FAQ() {
    return (
        <div className="FAQ">
            <Typography variant='h4'>よくある質問</Typography>
            <Stack spacing={2}>

                <QACard question='活動頻度はどれくらいですか？'>
                    <Typography variant="body1" padding={2} >
                        所属する班や各々のモチベーションによりますが、基本的に作業への参加は強制しません。週1,2での参加も毎日倉庫で作業してくれる人も歓迎しております。
                    </Typography>
                </QACard>

                <QACard question='バイト・勉強との両立は出来ますか？'>
                    <Typography variant="body1" padding={2} >
                        はい、出来ます。先輩の多くはバイトをしていますし、更に他サークルの活動も楽しんでいる人もいます。
                    </Typography>
                </QACard>

                <QACard question='全く知識がないんですが・・・'>
                    <Typography variant="body1" padding={2} >
                        全然問題ありません。ほとんどの人が入った時点では全くの素人です。
                    </Typography>
                </QACard>

                <QACard question='不器用だけど大丈夫かな？'>
                    <Typography variant="body1" padding={2} >
                        やる気があれば手先の器用さは問題になりません。
                    </Typography>
                </QACard>

                <QACard question='他大生でも入れますか？'>
                    <Typography variant="body1" padding={2} >
                        もちろん！我々は誰でも歓迎しています！
                    </Typography>
                </QACard>

                <QACard question='部員はどのくらいいるの？'>
                    <Typography variant="body1" padding={2} >
                        現在は、43人で活動しています。
                    </Typography>
                </QACard>

                <QACard question='Meisterってどこで活動しているの？'>
                    <Typography variant="body1" padding={2} >
                        主な活動は南2号館前の倉庫で行っています。詳しくはアクセスを参照してみてください。
                    </Typography>
                </QACard>

                <QACard question='作業以外に何か楽しいことはありますか？'>
                    <Typography variant="body1" padding={2} >
                        毎年春休みに旅行を企画しています。
                    </Typography>
                </QACard>

                <QACard question='もっと詳しい話を聞きたいんですが……。'>
                    <Typography variant="body1" padding={2} >
                        Mail:
                        <a href="meisterwelcome2021@gmail.com">
                            meisterwelcome2021@gmail.com
                        </a><br />
                        Twitter:
                        <a href="https://x.com/meister_welcome">
                            @Meister_2023
                        </a><br />
                        LINE:
                        <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">
                            Meister新歓
                        </a>
                    </Typography>
                </QACard>

            </Stack>
        </div>
    )
}

export default FAQ

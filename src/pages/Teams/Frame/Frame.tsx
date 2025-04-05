import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Frame() {
    return (
        <Card>
            <CardHeader title='P・フレーム班' />

            <CardContent>
                <ImageList cols={3} gap={8} sx={{ maxHeight: 600 }}>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                </ImageList>

                <Typography>
                    P・フレーム班はCFRP・フレーム班の略で、人力飛行機の骨組みとなる桁をCFRPで作成しています。<br />
                    フレームに使われるものも同じくCFRPで作られており、それらの接合も担当しています。<br />CFRPとは炭素繊維強化プラスチックのことで、人力飛行機に用いられる黒い部分に使われている、軽量で高剛性な材料です。<br />
                    桁を作るときには人数が必要となるため、班の枠組みを超えて協力する機会が多いことも魅力の一つです!!
                </Typography>
            </CardContent>
        </Card>

    )
};
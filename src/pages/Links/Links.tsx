import { Typography, Card, Stack, List, ListItem, Avatar } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import img_line_logo from './img/LINE_Brand_icon.png'
import { Instagram } from '@mui/icons-material';

function Links() {
    return (
        <div className="Links">
            <Typography variant='h4'>外部リンク</Typography>
            <List>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'primary',bgcolor: 'white' }}>
                                <HomeIcon />
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://meister.ne.jp">ホームページ</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: '#1DA1F2',bgcolor: 'white' }}>
                                <TwitterIcon />
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://x.com/meister_welcome">公式Twitter</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'orange',bgcolor: 'white' }}>
                                <Instagram />
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://www.instagram.com/tokyotechmeister_pr?igsh=MW1ieTdmdmt1d3Mxcw%3D%3D&utm_source=qr">公式Instagram</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'red',bgcolor: 'white' }}>
                                <YouTubeIcon/>
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://www.youtube.com/user/Meistermovie">公式YouTube</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'black',bgcolor: 'white' }}>
                                <GitHubIcon/>
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://github.com/TitechMeister">Github</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 1 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar src={img_line_logo} sx={{ color: 'white',bgcolor: 'green' }}>
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">LINE</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
            </List>
        </div >
    )
}

export default Links

import * as React from 'react'
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


interface MenuItem {
    title: string,
    path: string,
    element: JSX.Element
}

interface MenuProps {
    title: string,
    children: MenuItem[],
    setPrefersDarkMode: (value: boolean) => void,
    prefersDarkMode: boolean
}

export default function Menu(props: MenuProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <AppBar component="nav" color='primary' enableColorOnDark>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        padding={1}
                    >
                        {props.title}
                    </Typography>


                    {/* Desktop表示部分 */}
                    <Box sx={{ display: { xs: 'none', sm: 'block', flexGrow: 1 } }}>
                        {props.children.map((item, idx) => (
                            <Link key={item.path} to={item.path}>
                                <Button sx={{ color: '#fff' }}>
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={() => { props.setPrefersDarkMode(!props.prefersDarkMode) }}>
                        {props.prefersDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                </Toolbar>
            </AppBar>

            {/* Mobile表示部分 */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <List>
                            {props.children.map((item) => (
                                <ListItem key={item.path} disablePadding>
                                    <Link to={item.path}>
                                        <ListItemButton sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={item.title} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </React.Fragment>
    )
}
import * as React from 'react';

import Menu from './component/Menu';

import Home from './pages/Home/Home';
import Teams from './pages/Teams/Teams';
import Event from './pages/Event/Event';
import Links from './pages/Links/Links';
import FAQ from './pages/FAQ/FAQ';
import Interview from './pages/Interview/Interview';
import Access from './pages/Access/Access';
import NotFound from './pages/NotFound';
import Admission from './pages/Admission/Admission';

import { createTheme, CssBaseline, ThemeProvider, Box, Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScrollRestoration, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


interface Props {
}

const items = [
  { title: 'トップ', element: <Home />, path: '/' },
  { title: 'インタビュー', element: <Interview />, path: '/interview' },
  { title: '班紹介', element: <Teams />, path: '/teams' },
  { title: '新歓イベント', element: <Event />, path: '/event' },
  { title: 'よくある質問', element: <FAQ />, path: '/faq' },
  { title: '入部方法', element: <Admission />, path: '/admission' },
  { title: 'アクセス', element: <Access />, path: '/access' },
  { title: 'リンク', element: <Links />, path: '/links' }
]


export default function App(props: Props) {
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'))

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: "#0090F0"
          },
        },
      }),
    [prefersDarkMode],
  );

  const router = createBrowserRouter([
    {
      path: '',
      element:
        <Box component="main" sx={{ p: 3 }}>
          <Menu children={items} title='Meister' setPrefersDarkMode={setPrefersDarkMode} prefersDarkMode={prefersDarkMode}></Menu>
          <Toolbar />
          <Outlet />
          <ScrollRestoration />
        </Box>,
      children: items,
      errorElement: <NotFound />
    }
  ], {
    basename: "/welcome/"
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <RouterProvider router={router}></RouterProvider>
        </Box>

      </ThemeProvider>
    </Box>
  );
}
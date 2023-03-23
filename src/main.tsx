import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

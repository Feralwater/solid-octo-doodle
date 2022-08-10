import React from 'react';
import ReactDOM from 'react-dom/client';
import { normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    scroll-behavior: smooth;
    font-size: 10px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #5680F9;
      border-radius: 8px;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

import React, { createContext, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import Store from './store/store';

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

interface IStore {
  store: Store;
}

const store = new Store();
export const Context = createContext<IStore>({
  store,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Context.Provider value={{ store }}>
          <App />
        </Context.Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

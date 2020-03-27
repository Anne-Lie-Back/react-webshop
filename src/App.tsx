import React from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './MuiTheme'
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout/>
        </div>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;

import React from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './MuiTheme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
      <Layout/>
    </div>
    </ThemeProvider>
  );
}

export default App;

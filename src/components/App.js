import React from 'react';
import MyButton from './Mat';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <header className="App-header">
            <MyButton />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            el="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
    </ThemeProvider>
  );
}

export default App;

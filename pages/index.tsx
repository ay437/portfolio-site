import { ThemeProvider } from '@material-ui/core';
import theme from '../themeprovider/theme/index'
import CardLayout from '../components/CardLayout/CardLayout';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CardLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;

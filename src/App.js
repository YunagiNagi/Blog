import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from './AppBar/AppBar';
import ImgMediaCard from './Header/Header';
import DetailCard from './Detail/Detail';
import Contents from './Contents/Contents'; 
import Footer from './Footer/Footer';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <ImgMediaCard />
        <DetailCard />
        <Contents />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

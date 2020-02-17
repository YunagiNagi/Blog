import React from 'react';
import './App.css';
import ButtonAppBar from './AppBar/AppBar';
import ImgMediaCard from './Header/Header';
import DetailCard from './Detail/Detail';
import Contents from './Contents/Contents';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <ImgMediaCard />
      <DetailCard />
      <Contents />
    </div>
  );
}

export default App;

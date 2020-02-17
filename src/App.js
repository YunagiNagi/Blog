import React from 'react';
import './App.css';
import ButtonAppBar from './AppBar/AppBar';
import ImgMediaCard from './Header/Header';
import DetailCard from './Detail/Detail';
import ProfileCard from './Profile/Profile';
import PostCard from './Post/Post';
import PaginationButtons from './Pagination/Pagination';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <ImgMediaCard />
      <DetailCard />
      <PostCard />
      <PaginationButtons />
      <ProfileCard />
    </div>
  );
}

export default App;

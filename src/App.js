import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostContainer from './container/post-container';
import Friend from './container/friend';
import SignUp from './container/signUp';
import MainPage from './container/mainpage';
import Login from './container/login';
import Landing from './container/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<MainPage />}>
          <Route path="/PostContainer" element={<PostContainer />} />
          <Route path="/Friend" element={<Friend />} />
        </Route>
        <Route path='/Mainpage' element={<MainPage />} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

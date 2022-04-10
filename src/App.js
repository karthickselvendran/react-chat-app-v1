import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signup/signUp';
import { SignIn } from './pages/signin/signIn';
import { Chat } from './pages/chat/chat';
import './App.css';

export const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignUp />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='chat' element={<Chat />} />
          <Route path='*' element={<h3>No page found</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 
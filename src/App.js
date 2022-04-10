import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Chat } from './pages/chat/chat';

export const App = () => {

  return (
    <>
      <p>Chat app</p>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='chat' element={<Chat />} />
          <Route path='*' element={<h3>No page found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  )
} 
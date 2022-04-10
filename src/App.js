import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signup/signUp';
import { SignIn } from './pages/signin/signIn';
import { Chat } from './pages/chat/chat';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './pages/signup/signUp';

export const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='' element={<SignUp />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          
          <Route path='chat' element={<Chat />} />
          <Route path='*' element={
            <main className='wrongRoute'>
              <p>There's nothing here, Please check the url!</p>
            </main>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 
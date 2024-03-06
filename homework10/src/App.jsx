import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFaund from './Components/Not-Faund';
import Contacts from './Components/Contacts';
import Layout from './Components/Layout';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {

  return (
    <>
      <ErrorBoundary>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element = {<About />}/>
              <Route path='/contacts' element={<Contacts />} />
              <Route path='*' element = {<NotFaund />}/>
            </Route>
        </Routes >
      </ErrorBoundary>   
    </>
  )
}

export default App

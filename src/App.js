import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './components/pageContent/HomePage';
import { CareerPage } from './components/pageContent/CareerPage';
import { JobDesPage } from './components/pageContent/JobDesPage';
import { FormPage } from './components/pageContent/FormPage';
import { Footer } from './components/footer/Footer';
import { TablePage } from './components/pageContent/TablePage';
import { LoginPage } from './components/pageContent/LoginPage';
import { UserProfilePage } from './components/pageContent/UserProfilePage';
import { PreApplyPage } from './components/pageContent/PreApplyPage';

import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [title, setTitle] = useState("full-time");
  console.log(title);
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage setTitle = {setTitle}/>}/>
          <Route path='/career' exact element={<CareerPage />} />
          <Route path='/jobdes' exact element={<JobDesPage title={title}/>} />
          <Route path='/form' exact element={<FormPage title={title}/>} />
          <Route path='/table' exact element={<TablePage />} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/user' exact element={<UserProfilePage />} />
          <Route path='/pre' exact element={<PreApplyPage />} />
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;

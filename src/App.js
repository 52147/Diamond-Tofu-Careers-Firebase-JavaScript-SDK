import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './components/pageContent/HomePage';
import { CareerPage } from './components/pageContent/CareerPage';
import { JobDesPage } from './components/pageContent/JobDesPage';
import { FormPage } from './components/pageContent/FormPage';
import { Footer } from './components/footer/Footer';
import { TablePage } from './components/pageContent/TablePage';
import { LoginPage } from './components/pageContent/LoginPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/career' exact element={<CareerPage />} />
          <Route path='/jobdes' exact element={<JobDesPage />} />
          <Route path='/form' exact element={<FormPage />} />
          <Route path='/table' exact element={<TablePage />} />
          <Route path='/login' exact element={<LoginPage />} />
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;

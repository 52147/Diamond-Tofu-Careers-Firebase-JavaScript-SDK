import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './components/pageContent/HomePage';
import { CareerPage } from './components/pageContent/CareerPage';
import { JobDesPage } from './components/pageContent/JobDesPage';
import { FormPage } from './components/pageContent/FormPage';
import { Footer } from './components/footer/Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { TablePage } from './components/pageContent/TablePage';

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
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;

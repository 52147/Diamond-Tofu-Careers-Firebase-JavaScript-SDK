import './App.css';
import { Header } from './components/Header';
import { HomePages } from './components/pageContent/HomePages';
import { CareerPages } from './components/pageContent/CareerPages';
import { Footer } from './components/Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePages/>}/>
          <Route path='/career' exact element={<CareerPages />} />
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;

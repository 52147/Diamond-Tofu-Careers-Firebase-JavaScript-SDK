import logo from './logo.svg';
import './App.css';
import { Header } from './components/home/header/Header';
import { HomePages } from './components/pageContent/HomePages';
import { CareerPages } from './components/pageContent/CareerPages';
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
    </Router>

    </>
  );
}

export default App;

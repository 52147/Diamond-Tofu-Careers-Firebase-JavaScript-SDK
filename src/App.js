import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { HomePages } from './components/pageContent/HomePages';
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
        </Routes>
    </Router>
    </>
  );
}

export default App;

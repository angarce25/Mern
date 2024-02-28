import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/header';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

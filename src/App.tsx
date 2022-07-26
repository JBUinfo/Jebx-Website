import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';

const App: React.FC = () => {
  return (
    <div className='big-box-container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;

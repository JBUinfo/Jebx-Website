import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import TechPage from './pages/tech/tech.component';
import WorkPage from './pages/work/work.component';
import MePage from './pages/me/me.component';

const App: React.FC = () => {
  return (
    <div className='big-box-container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/tech' element={<TechPage/>} />
          <Route path='/work' element={<WorkPage/>} />
          <Route path='/me' element={<MePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';

const App: React.FC = () => {
  return (
    <div className='big-box-container'>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;

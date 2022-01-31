import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Topbar } from './components';
import Home from './pages/Homepage/Home';
import SinglePost from './pages/ReadPost/SinglePost';
import WritePost from './pages/Writepage/WritePost';
import Settings from './pages/Settings/Settings'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  return(
    <>
    <div className="App">
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/writepost' element={<WritePost />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    
    </>
  )
};

export default App;

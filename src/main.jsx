import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import MainApp from './MainApp.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Education from './Components/Education.jsx';
import Middle from './Components/Middle.jsx';
import BKImage from './Components/BKImage.jsx';
import Project from './Components/Project.jsx';
import Nav from './Components/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='' element={<MainApp/>} />
          <Route path="about" element={<AboutMe />} />
          <Route path='Education' element={<Education/>}/>
          <Route path='Project' element={<Project/>}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

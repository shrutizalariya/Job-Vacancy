import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./Home";
import About from "./About";
import Company from "./Company";
import Job from "./Job";
import Img from "./Img";
import  ViewDetails from './ViewDetails';
import Form from './Form'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Img/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/job" element={<Job/>} />
          <Route path="/ViewDetails" element={<ViewDetails/>} />
          <Route path="/register" element={<Form/>} />
          <Route path="/back" element={<Company/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);
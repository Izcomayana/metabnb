import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../pages/App';
import Places from "../../src/pages/Places"

export default function index() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="places" element={<Places />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
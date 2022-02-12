import React, { Fragment } from 'react';
import GlobalStyle from 'styles/global';
import App from 'Components/App';
import Analytics from 'Components/Analytics'
import Cases from 'Components/Cases'
// React Router //
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Root = () => (
  <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default Root;

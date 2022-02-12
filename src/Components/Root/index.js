import React, { Fragment } from 'react';
import GlobalStyle from 'styles/global';
import App from 'Components/App';
import Analytics from 'Components/Analytics'
import Cases from 'Components/Cases'
import Country from 'Components/Country'
// React Router //
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from 'Components/Statistics';
import Detail from 'Components/Detail/Detail';

const Root = () => (
  <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/country" element={<Country />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default Root;

import React from "react";
import {Route, Routes} from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Exchanges,
  Home,
  CryptoCurrencies,
  CryptoDetails,
  News,
  Footer,
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coidId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

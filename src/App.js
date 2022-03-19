import React from "react";
import { Switch, Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Home,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./Components";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

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
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto World <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

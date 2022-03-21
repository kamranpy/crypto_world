import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  GlobalOutlined,
  AlertOutlined,
  FundProjectionScreenOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/crypto.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundProjectionScreenOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<GlobalOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<AlertOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
